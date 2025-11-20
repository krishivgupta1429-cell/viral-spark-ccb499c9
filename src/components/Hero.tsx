import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-12">
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

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Small floating gradient orb - top left */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 opacity-30 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
            filter: 'blur(40px)',
            animationDelay: '0s',
          }}
        />
        
        {/* Small floating gradient orb - middle left */}
        <div 
          className="absolute top-1/2 left-20 w-24 h-24 opacity-25 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(245, 133, 41, 0.4) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 100%)',
            filter: 'blur(35px)',
            animationDelay: '1.5s',
          }}
        />
        
        {/* Small floating gradient orb - bottom right */}
        <div 
          className="absolute bottom-32 right-16 w-28 h-28 opacity-30 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)',
            filter: 'blur(40px)',
            animationDelay: '3s',
          }}
        />
        
        {/* Small floating gradient orb - top right */}
        <div 
          className="absolute top-40 right-32 w-20 h-20 opacity-25 animate-float-slow"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(245, 133, 41, 0.3) 50%, transparent 100%)',
            filter: 'blur(30px)',
            animationDelay: '4.5s',
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-14 relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:space-y-10 max-w-[820px] flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full"
            >
              <h1 className="text-balance font-bold leading-tight tracking-[-0.04em] text-[clamp(2.8rem,5vw,5.5rem)] md:text-[clamp(3.5rem,6vw,6rem)] text-white/95 drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                <span className="block">Find THE</span>
                <span className="block">BEST Content</span>
                <span className="block">Ideas in</span>
                <span className="block md:whitespace-nowrap">
                  just{" "}
                  <span
                    className="
                      smooth-glow
                      inline-block
                      align-baseline
                      min-w-[9ch]
                    "
                  >
                    <TypewriterText
                      text="2 Clicks!"
                      loop
                      typingSpeed={80}
                      deleteSpeed={40}
                      startDelay={400}
                      backDelay={1400}
                      fadeOut={true}
                      fadeOutDelay={600}
                      showCursor={true}
                      cursorChar="|"
                      className="bg-gradient-to-r from-[#FF4D9D] via-[#FF7A4D] to-[#8F5BFF] bg-clip-text text-transparent"
                    />
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl"
            >
              Start exploring viral ideas using ViralityAI today!
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.2,
                }}
              >
                <button
                  className="text-glow font-semibold px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-xl hover:shadow-pink-500/40 transition-all text-lg w-full sm:w-auto"
                >
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Static hero visual */}
          <div className="relative flex flex-col items-center justify-center w-full">
            <img
              src="/images/high-angle-hand-holding-smartphone.png"
              alt="Creator exploring viral Instagram content on a smartphone"
              className="w-full h-auto max-w-[520px] lg:max-w-[560px] object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

