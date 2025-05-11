
export const createBlastEffects = (blastIntensity: number) => {
  const blasts = [];
  // Increase number of blasts based on intensity
  const blastCount = blastIntensity * 10;
  
  for (let i = 0; i < blastCount; i++) {
    const size = Math.random() * 150 + 50;
    const delay = Math.random() * 1.5;
    const duration = 1 + Math.random() * 0.8;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    
    blasts.push({
      key: `blast-${i}`,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        background: `radial-gradient(circle, rgba(51,195,240,${0.7 + Math.random() * 0.3}) 0%, rgba(51,195,240,0) 70%)`
      }
    });
  }
  
  return blasts;
};

export const createCelebrationEffects = (blastIntensity: number) => {
  const items = [];
  const emojis = ['🎉', '🎂', '🎊', '✨'];
  const count = Math.min(10, blastIntensity * 5);
  
  for (let i = 0; i < count; i++) {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const size = Math.random() * 20 + 20;
    const delay = Math.random() * 2;
    const duration = 1.5 + Math.random() * 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    
    items.push({
      key: `celebrate-${i}`,
      style: {
        top: `${top}%`,
        left: `${left}%`,
        fontSize: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      },
      emoji
    });
  }
  
  return items;
};

export const createConfettiElements = () => {
  const colors = ['#33C3F0', '#63c9f5', '#23a6d5', '#1da1f2', '#90e0ef', '#00b4d8'];
  const elements = [];
  
  for (let i = 0; i < 20; i++) {
    const left = `${Math.random() * 100}%`;
    const animationDelay = `${Math.random() * 3}s`;
    const size = `${Math.random() * 10 + 5}px`;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = Math.random() > 0.7 ? '50%' : Math.random() > 0.5 ? '0%' : '25%';
    
    elements.push({
      key: i,
      style: {
        left,
        top: '-20px',
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: shape,
        boxShadow: `0 0 10px ${color}`,
        filter: 'blur(0.5px)',
        animationDelay,
        animationDuration: `${3 + Math.random() * 4}s`
      }
    });
  }
  
  return elements;
};

export const createFloatingElements = () => {
  const elements = [];
  const icons = ['🎂', '🎁', '🎉']; 
  
  for (let i = 0; i < 3; i++) {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    elements.push({
      key: `floating-${i}`,
      style: {
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        animationDelay: `${i * 0.3}s`,
        animationDuration: `${4 + Math.random() * 4}s`,
        transform: `rotate(${Math.random() * 30 - 15}deg) scale(${0.8 + Math.random() * 0.5}) translateZ(${Math.random() * 50}px)`,
        filter: 'drop-shadow(0 0 15px rgba(51,195,240,0.6))',
        zIndex: Math.floor(Math.random() * 5)
      },
      icon
    });
  }
  
  return elements;
};
