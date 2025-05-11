
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TimeCapsule } from '@/types';
import { formatTimeRemaining, calculateProgress } from '@/utils/timeCapsule';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface CapsuleCardProps {
  capsule: TimeCapsule;
  onDelete: (id: string) => void;
}

const CapsuleCard: React.FC<CapsuleCardProps> = ({ capsule, onDelete }) => {
  const [timeRemaining, setTimeRemaining] = useState(formatTimeRemaining(capsule.expiresAt));
  const [progress, setProgress] = useState(calculateProgress(capsule.expiresAt));
  const [isReady, setIsReady] = useState(Date.now() >= capsule.expiresAt);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now >= capsule.expiresAt && !isReady) {
        setIsReady(true);
      }
      setTimeRemaining(formatTimeRemaining(capsule.expiresAt));
      setProgress(calculateProgress(capsule.expiresAt));
    }, 1000);

    return () => clearInterval(interval);
  }, [capsule.expiresAt, isReady]);

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this time capsule?')) {
      onDelete(capsule.id);
    }
  };

  return (
    <Link to={`/capsule/${capsule.id}`}>
      <div className="capsule-card group">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-lg">{capsule.title}</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity" 
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{capsule.description}</p>
        
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className={`font-medium ${isReady ? 'text-capsule-purple' : 'text-muted-foreground'}`}>
              {isReady ? '✨ Ready to reveal!' : timeRemaining}
            </span>
            <span className="text-muted-foreground">
              {new Date(capsule.expiresAt).toLocaleDateString()}
            </span>
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      </div>
    </Link>
  );
};

export default CapsuleCard;
