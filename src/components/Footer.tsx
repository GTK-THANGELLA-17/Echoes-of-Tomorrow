
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden py-6">
      {/* Simple Acrylic Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-center items-center px-4">
          <div className="text-center">
            <p className="text-sm text-primary/80 dark:text-primary/70">
              Created by GTK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
