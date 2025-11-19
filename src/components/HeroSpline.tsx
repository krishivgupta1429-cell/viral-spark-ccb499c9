import Spline from "@splinetool/react-spline";
import { useEffect, useRef } from "react";

interface HeroSplineProps {
  sceneUrl?: string;
}

const HeroSpline = ({
  sceneUrl = "https://prod.spline.design/UQjrm0asV7gYpKMN/scene.splinecode",
}: HeroSplineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = containerRef.current;
    if (!wrapper) return;

    // Global capturing wheel listener to intercept zoom before Spline sees it
    const handleWheel = (e: WheelEvent) => {
      // If the wheel event happens anywhere inside the hero Spline wrapper,
      // block it completely so Spline never sees it and cannot zoom.
      if (wrapper.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // capture: true ensures we intercept before Spline's own listeners
    window.addEventListener("wheel", handleWheel, { passive: false, capture: true });

    // Remove Spline watermark and make background transparent
    const removeWatermark = () => {
      if (containerRef.current) {
        // Find all iframes (Spline uses iframe)
        const iframes = containerRef.current.querySelectorAll("iframe");
        iframes.forEach((iframe) => {
          iframe.style.background = "transparent";
          iframe.style.backgroundColor = "transparent";
        });

        // Find canvas elements and make them transparent
        const canvases = containerRef.current.querySelectorAll("canvas");
        canvases.forEach((canvas) => {
          canvas.style.background = "transparent";
          canvas.style.backgroundColor = "transparent";
        });

        // Remove watermark badge
        const allLinks = containerRef.current.querySelectorAll("a");
        allLinks.forEach((link) => {
          if (
            link.href.includes("spline.design") ||
            link.textContent?.includes("Built with Spline")
          ) {
            link.style.display = "none";
            link.style.visibility = "hidden";
            link.style.opacity = "0";
            link.style.pointerEvents = "none";
          }
        });

        // Remove any divs that might contain watermark
        const allDivs = containerRef.current.querySelectorAll("div");
        allDivs.forEach((div) => {
          const text = div.textContent || "";
          if (
            text.includes("Built with Spline") ||
            text.includes("spline.design")
          ) {
            div.style.display = "none";
            div.style.visibility = "hidden";
            div.style.opacity = "0";
          }
        });
      }
    };

    // Run immediately and after delays to catch dynamically loaded elements
    removeWatermark();
    const timeout1 = setTimeout(removeWatermark, 500);
    const timeout2 = setTimeout(removeWatermark, 1500);
    const timeout3 = setTimeout(removeWatermark, 3000);
    const interval = setInterval(removeWatermark, 5000);

    return () => {
      window.removeEventListener("wheel", handleWheel, { capture: true });
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] sm:h-[580px] md:h-[640px] lg:h-[720px] spline-hero-container overflow-hidden"
      style={{
        minHeight: "500px",
        touchAction: "pan-y", // keep vertical scroll on touch, but avoid pinch-zoom glitches
      }}
    >
      <Spline
        scene={sceneUrl}
        className="absolute inset-0 w-full h-full"
        style={{
          background: "transparent",
        }}
      />
    </div>
  );
};

export default HeroSpline;
