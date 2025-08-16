import { Button } from '../../../../components/ui/button';
import { Filter } from 'lucide-react';

interface FilterButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export default function FilterButton({ label = 'Filter', onClick, className }: FilterButtonProps) {
  return (
    <Button variant="outline" size="sm" className={className ?? 'border-gray-300'} onClick={onClick}>
      <Filter className="h-4 w-4 mr-2" />
      {label}
    </Button>
  );
}



