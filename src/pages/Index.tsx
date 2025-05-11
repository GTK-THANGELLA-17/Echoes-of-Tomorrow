
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import CapsuleCard from '@/components/CapsuleCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getAllTimeCapsules, deleteTimeCapsule, exportTimeCapsules, importTimeCapsules } from '@/utils/timeCapsule';
import { TimeCapsule } from '@/types';
import { toast } from '@/components/ui/sonner';
import { Link } from 'react-router-dom';

const Index = () => {
  const [capsules, setCapsules] = useState<TimeCapsule[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    loadCapsules();
    
    // Check for expired capsules periodically
    const interval = setInterval(loadCapsules, 60000); // Every minute
    
    return () => clearInterval(interval);
  }, []);
  
  const loadCapsules = () => {
    const allCapsules = getAllTimeCapsules();
    setCapsules(allCapsules);
  };
  
  const handleDelete = (id: string) => {
    deleteTimeCapsule(id);
    loadCapsules();
    toast.success('Time capsule deleted.');
  };
  
  const handleExport = () => {
    const data = exportTimeCapsules();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `time-capsules-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    toast.success('Exported time capsules successfully!');
  };
  
  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (!event.target || typeof event.target.result !== 'string') return;
      
      const success = importTimeCapsules(event.target.result);
      if (success) {
        loadCapsules();
        toast.success('Time capsules imported successfully!');
      } else {
        toast.error('Failed to import time capsules. The file might be invalid.');
      }
    };
    
    reader.readAsText(file);
    // Reset the file input
    e.target.value = '';
  };
  
  const filteredCapsules = capsules.filter(capsule => 
    capsule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    capsule.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Sort capsules: ready to reveal first, then by expiration date
  const sortedCapsules = [...filteredCapsules].sort((a, b) => {
    const nowTime = Date.now();
    const aIsReady = a.expiresAt <= nowTime;
    const bIsReady = b.expiresAt <= nowTime;
    
    if (aIsReady && !bIsReady) return -1;
    if (!aIsReady && bIsReady) return 1;
    
    return a.expiresAt - b.expiresAt;
  });
  
  return (
    <Layout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Your Time Capsules</h1>
          <p className="text-muted-foreground mt-1">Messages and content revealed at just the right moment</p>
        </div>
        <Link to="/create">
          <Button>Create New Capsule</Button>
        </Link>
      </div>
      
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Input
          placeholder="Search time capsules..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            Export
          </Button>
          <div className="relative">
            <Button variant="outline" size="sm" asChild>
              <label htmlFor="import-file">Import</label>
            </Button>
            <input
              type="file"
              id="import-file"
              accept=".json"
              onChange={handleImport}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      {capsules.length === 0 ? (
        <div className="text-center py-16 bg-muted/30 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">No time capsules yet</h3>
          <p className="text-muted-foreground mb-6">Create your first time capsule to get started</p>
          <Link to="/create">
            <Button>Create Your First Capsule</Button>
          </Link>
        </div>
      ) : filteredCapsules.length === 0 ? (
        <div className="text-center py-12 bg-muted/30 rounded-lg">
          <p className="text-muted-foreground">No time capsules match your search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCapsules.map((capsule) => (
            <CapsuleCard 
              key={capsule.id} 
              capsule={capsule} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Index;
