
export const calculateProgress = (isRevealed: boolean, timerDate: number, initialTimeDiff: number) => {
  if (isRevealed) return 100;
  
  const now = Date.now();
  const timeLeft = timerDate - now;
  
  // If time is up, show 100%
  if (timeLeft <= 0) return 100;
  
  // Calculate what percentage of time has elapsed
  const elapsedTime = initialTimeDiff - timeLeft;
  const progressPercentage = (elapsedTime / initialTimeDiff) * 100;
  
  // Ensure the value is between 0 and 100
  return Math.max(0, Math.min(100, progressPercentage));
};
