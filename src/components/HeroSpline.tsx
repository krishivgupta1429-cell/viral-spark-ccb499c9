import Spline from "@splinetool/react-spline";

interface HeroSplineProps {
  sceneUrl?: string;
}

const HeroSpline = ({
  sceneUrl = "https://prod.spline.design/PhruDk0TOLnN7WET/scene.splinecode",
}: HeroSplineProps) => {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
      <Spline scene={sceneUrl} />
    </div>
  );
};

export default HeroSpline;
