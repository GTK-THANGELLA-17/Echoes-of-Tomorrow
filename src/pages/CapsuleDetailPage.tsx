
import React, { useState, useEffect } from 'react';
import CapsuleDetail from '@/components/CapsuleDetail';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const CapsuleDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex flex-col">
      {/* Theme toggle in the top-right corner */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex items-center justify-center py-10 overflow-hidden">
        {isLoading ? (
          // Enhanced loading animation
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute -inset-40 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -inset-32 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 dark:from-blue-800/40 dark:to-cyan-800/40 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
            <div className="absolute -inset-24 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 dark:from-blue-800/50 dark:to-cyan-800/50 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
            
            <div className="relative p-8 bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 dark:border-blue-800/50 neo-blur">
              <div className="w-24 h-24 relative mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                <div className="absolute inset-1 rounded-full border-4 border-r-cyan-400 border-t-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl animate-bounce">🎂</div>
                </div>
              </div>
              <p className="text-xl font-dancing text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 dark:from-blue-300 dark:via-cyan-300 dark:to-blue-300 animate-pulse">
                Loading Birthday Surprise...
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 overflow-hidden">
              {/* Background particles */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-full bg-gradient-to-br from-blue-200/20 to-cyan-200/20 dark:from-blue-800/15 dark:to-cyan-800/15 blur-xl"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
            <div className="relative z-10 w-full max-w-3xl px-4">
              <CapsuleDetail />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CapsuleDetailPage;
