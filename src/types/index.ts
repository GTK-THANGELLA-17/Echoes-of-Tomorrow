
export interface TimeCapsule {
  id: string;
  title: string;
  description: string;
  content: string;
  contentType: 'text' | 'link' | 'file';
  createdAt: number;
  expiresAt: number;
  isRevealed: boolean;
}

export type TimeCapsuleFormData = Omit<TimeCapsule, 'id' | 'createdAt' | 'isRevealed'>;
