
import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold text-primary flex items-center gap-2">
            <span className="rounded-full bg-primary h-6 w-6 flex items-center justify-center text-primary-foreground text-sm">⏱</span>
            TimeCapsule
          </Link>
          <nav className="flex gap-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/create" className="text-muted-foreground hover:text-foreground transition-colors">
              Create New
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-8">
        {children}
      </main>
      <footer className="border-t py-4">
        <div className="container text-center text-sm text-muted-foreground">
          Time Capsule App - Store messages for future revealing
        </div>
      </footer>
    </div>
  );
};

export default Layout;
