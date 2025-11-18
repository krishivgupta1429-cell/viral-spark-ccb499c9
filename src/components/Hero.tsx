import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HeroSpline from "./HeroSpline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-instagram-magenta/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-instagram-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Find viral content ideas in{" "}
              <span className="text-instagram-gradient">2 clicks</span>
            </h1>

            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl">
              Type any keyword and discover proven, high-performing content ideas from Instagram. 
              See what's trending right now and pivot your content strategy to grow faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-instagram-gradient hover:opacity-90 transition-opacity text-lg px-8 py-6 glow-primary"
              >
                Try Virality AI Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-border/50 hover:border-primary/50"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tutorial
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                ✓ No credit card required
              </span>
              <span className="flex items-center gap-2">
                ✓ 30 days free
              </span>
              <span className="flex items-center gap-2">
                ✓ Cancel anytime
              </span>
            </div>
          </motion.div>

          {/* Right: Spline 3D scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSpline />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
