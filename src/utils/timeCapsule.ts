
import { TimeCapsule, TimeCapsuleFormData } from "@/types";

const STORAGE_KEY = 'time-capsules';

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function createTimeCapsule(formData: TimeCapsuleFormData): TimeCapsule {
  const now = Date.now();
  return {
    id: generateId(),
    ...formData,
    createdAt: now,
    isRevealed: false,
  };
}

export function saveTimeCapsule(capsule: TimeCapsule): void {
  const capsules = getAllTimeCapsules();
  const index = capsules.findIndex(c => c.id === capsule.id);
  
  if (index !== -1) {
    capsules[index] = capsule;
  } else {
    capsules.push(capsule);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(capsules));
}

export function getAllTimeCapsules(): TimeCapsule[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to parse time capsules from storage', e);
    return [];
  }
}

export function getTimeCapsule(id: string): TimeCapsule | undefined {
  return getAllTimeCapsules().find(capsule => capsule.id === id);
}

export function deleteTimeCapsule(id: string): void {
  const capsules = getAllTimeCapsules().filter(capsule => capsule.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(capsules));
}

export function formatTimeRemaining(targetDate: number): string {
  const now = Date.now();
  const remaining = targetDate - now;
  
  if (remaining <= 0) return 'Ready to open!';
  
  const seconds = Math.floor(remaining / 1000) % 60;
  const minutes = Math.floor(remaining / (1000 * 60)) % 60;
  const hours = Math.floor(remaining / (1000 * 60 * 60)) % 24;
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  
  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

export function calculateProgress(targetDate: number): number {
  const now = Date.now();
  if (now >= targetDate) return 100;
  
  const remaining = targetDate - now;
  const total = 24 * 60 * 60 * 1000; // Default to max 24 hours for progress calculation
  
  const progress = 100 - Math.min(100, (remaining / total) * 100);
  return Math.max(0, progress);
}

export function exportTimeCapsules(): string {
  const capsules = getAllTimeCapsules();
  return JSON.stringify(capsules);
}

export function importTimeCapsules(jsonData: string): boolean {
  try {
    const importedCapsules = JSON.parse(jsonData) as TimeCapsule[];
    
    if (!Array.isArray(importedCapsules)) {
      return false;
    }
    
    const existingCapsules = getAllTimeCapsules();
    const allCapsules = [...existingCapsules];
    
    // Add only capsules that don't exist yet
    for (const capsule of importedCapsules) {
      if (!existingCapsules.some(c => c.id === capsule.id)) {
        allCapsules.push(capsule);
      }
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allCapsules));
    return true;
  } catch (e) {
    console.error('Failed to import time capsules', e);
    return false;
  }
}
