
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTimeCapsule, saveTimeCapsule } from '@/utils/timeCapsule';
import { TimeCapsuleFormData } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/components/ui/sonner';

const CreateCapsuleForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TimeCapsuleFormData>({
    title: '',
    description: '',
    content: '',
    contentType: 'text',
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // Default: 24 hours from now
  });
  const [date, setDate] = useState<Date>(new Date(formData.expiresAt));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContentTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, contentType: value as 'text' | 'link' | 'file' }));
  };

  const handleDateChange = (date: Date | undefined) => {
    if (!date) return;
    
    setDate(date);
    
    // Set the time to the end of the selected day
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    setFormData(prev => ({ ...prev, expiresAt: endOfDay.getTime() }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      toast.error('Please provide a title for your time capsule.');
      return;
    }
    
    if (!formData.content.trim()) {
      toast.error('Please add some content to your time capsule.');
      return;
    }
    
    const capsule = createTimeCapsule(formData);
    saveTimeCapsule(capsule);
    toast.success('Time capsule created successfully!');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="What's this time capsule about?"
          maxLength={100}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description (optional)</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Add some details about why you're creating this time capsule..."
          maxLength={300}
        />
      </div>
      
      <div className="space-y-2">
        <Label>Content Type</Label>
        <RadioGroup 
          defaultValue="text" 
          value={formData.contentType}
          onValueChange={handleContentTypeChange}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="text" id="r-text" />
            <Label htmlFor="r-text">Text Message</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="link" id="r-link" />
            <Label htmlFor="r-link">Link/URL</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">
          {formData.contentType === 'text' ? 'Message' : 'Link URL'}
        </Label>
        {formData.contentType === 'text' ? (
          <Textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Write your message here..."
            className="min-h-[150px]"
            required
          />
        ) : (
          <Input
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="https://example.com"
            type="url"
            required
          />
        )}
      </div>
      
      <div className="space-y-2">
        <Label>Reveal Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <Button type="submit" className="w-full">Create Time Capsule</Button>
    </form>
  );
};

export default CreateCapsuleForm;
