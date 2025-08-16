import { Button } from '../../../../components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../../components/ui/dropdown-menu';
import { Calendar, ChevronDown } from 'lucide-react';

interface DateFilterProps {
  onFilterChange?: (filter: 'today' | 'week' | 'month') => void;
}

export function DateFilter({ onFilterChange }: DateFilterProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-2 min-w-fit bg-transparent"
        >
          <Calendar className="h-4 w-4" />
          <span>Filter by Date</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onFilterChange?.('today')}>Today</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onFilterChange?.('week')}>This Week</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onFilterChange?.('month')}>This Month</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
