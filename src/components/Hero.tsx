import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HeroSpline from "./HeroSpline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base Instagram gradient */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(ellipse at top left, #1C0030 0%, #130019 50%, #24003C 100%)'
          }}
        />
        
        {/* Radial spotlight behind headline text */}
        <div 
          className="absolute top-1/4 left-0 w-[600px] h-[600px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(60, 15, 92, 0.6) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Glow behind Spline 3D hero */}
        <div 
          className="absolute top-1/4 right-0 w-[700px] h-[700px] opacity-25"
          style={{
            background: 'radial-gradient(ellipse, #FF2D92 0%, #A020F0 40%, #F58529 70%, transparent 100%)',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Floating blurred blob - top left */}
        <div 
          className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF2D92 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        
        {/* Floating blurred blob - bottom center */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-15"
          style={{
            background: 'radial-gradient(ellipse, #8134AF 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Floating blurred blob - right side */}
        <div 
          className="absolute top-10 right-10 w-[400px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(circle, #00E8FF 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        
        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
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
