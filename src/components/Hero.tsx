import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import HeroSpline from "./HeroSpline";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Layered background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        {/* Base Instagram gradient - dark vibrant gradient (#0A0014 → #18002E → #2A003F) */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(180deg, #0A0014 0%, #18002E 50%, #2A003F 100%)'
          }}
        />
        
        {/* Subtle radial glow behind headline text */}
        <div 
          className="absolute top-1/4 left-0 w-[700px] h-[700px] opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        
        {/* Soft glow behind the 3D model on the right */}
        <div 
          className="absolute top-1/3 right-0 w-[900px] h-[900px] opacity-40"
          style={{
            background: 'radial-gradient(ellipse, rgba(236, 72, 153, 0.45) 0%, rgba(168, 85, 247, 0.35) 35%, rgba(139, 92, 246, 0.25) 60%, transparent 100%)',
            filter: 'blur(130px)'
          }}
        />
        
        {/* Large blurred gradient blob - pink/purple (top left) */}
        <div 
          className="absolute -top-32 -left-32 w-[600px] h-[600px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 80%)',
            filter: 'blur(100px)'
          }}
        />
        
        {/* Large blurred gradient blob - purple (bottom center) */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 80%)',
            filter: 'blur(110px)'
          }}
        />
        
        {/* Large blurred gradient blob - cyan (right side) */}
        <div 
          className="absolute top-20 right-20 w-[500px] h-[500px] opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(0, 232, 255, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 80%)',
            filter: 'blur(90px)'
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:space-y-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              Find viral content ideas in{" "}
              <span className="text-instagram-gradient">2 clicks</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl"
            >
              Type any keyword and discover proven, high-performing content ideas from Instagram. 
              See what's trending right now and pivot your content strategy to grow faster.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-instagram-gradient hover:opacity-90 transition-all duration-300 text-lg px-8 py-7 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 w-full sm:w-auto"
                >
                  Try Virality AI Free
                </Button>
              </motion.div>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-7 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Tutorial
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base text-muted-foreground pt-2"
            >
              <span className="flex items-center gap-2">
                ✓ No credit card required
              </span>
              <span className="flex items-center gap-2">
                ✓ 30 days free
              </span>
              <span className="flex items-center gap-2">
                ✓ Cancel anytime
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Spline 3D scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center justify-center w-full"
          >
            <HeroSpline />
            <div className="flex flex-col items-center mt-3">
              <p className="text-white/70 text-xs sm:text-sm animate-fade-in">
                Drag to rotate
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
