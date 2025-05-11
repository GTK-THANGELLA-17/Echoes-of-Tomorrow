
import React from 'react';
import { Cake } from 'lucide-react';

interface LoadingAnimationProps {
  loadingProgress: number;
  loadingText: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ loadingProgress, loadingText }) => {
  return (
    <div className="text-center z-20 glass-morphism p-8 rounded-2xl border border-blue-300/50 dark:border-blue-800/50 shadow-2xl">
      <div className="relative w-32 h-32 mx-auto mb-6 perspective-1000">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 animate-spin-slow opacity-30 transform-gpu"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 animate-spin-slow opacity-50 transform-gpu" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-500 dark:to-cyan-600 animate-spin-slow opacity-70 transform-gpu"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Cake className="w-16 h-16 text-white animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
        </div>
      </div>
      
      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-300 mb-4">
        {loadingText}
      </p>
      
      <div className="w-full bg-blue-100 dark:bg-blue-900/30 h-2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 transition-all duration-300"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
