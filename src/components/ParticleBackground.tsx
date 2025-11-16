const ParticleBackground = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * -20,
    opacity: Math.random() * 0.5 + 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/30 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      {/* Larger accent particles */}
      {Array.from({ length: 15 }, (_, i) => {
        const size = Math.random() * 8 + 6;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const duration = Math.random() * 25 + 15;
        const delay = Math.random() * -25;
        return (
          <div
            key={`accent-${i}`}
            className="absolute rounded-full bg-secondary/20 animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              opacity: 0.4,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;
