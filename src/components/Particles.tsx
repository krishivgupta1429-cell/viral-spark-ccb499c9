export default function Particles() {
  const particles = Array.from({ length: 30 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-pink-500/70 blur-sm animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
}

