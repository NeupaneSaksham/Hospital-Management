import { Button } from '../../../../components/ui/button';
import { Calendar } from 'lucide-react';

interface TimeRangeButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function TimeRangeButton({ label = 'All Time', onClick, className }: TimeRangeButtonProps) {
  return (
    <Button variant="outline" size="sm" className={className ?? 'border-gray-300'} onClick={onClick}>
      <Calendar className="h-4 w-4 mr-2" />
      {label}
    </Button>
  );
}


