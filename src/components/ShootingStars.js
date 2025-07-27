import React, { useEffect, useState, useCallback } from 'react';

const FallingStars = () => {
  const [stars, setStars] = useState([]);

  const createStar = useCallback(() => ({
    id: Date.now() + Math.random(),
    left: Math.random() * 100,
    size: Math.random() * 2 + 2,
    duration: Math.random() * 5 + 8
  }), []);

  useEffect(() => {
    const spawnStar = () => {
      const star = createStar();
      setStars(prev => [...prev, star]);
      
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== star.id));
      }, star.duration * 1000);
    };

    const interval = setInterval(spawnStar, 2000);
    return () => clearInterval(interval);
  }, [createStar]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default FallingStars;