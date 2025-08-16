import { Input } from '../../../../components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  wrapperClassName?: string;
  inputClassName?: string;
}

export function SearchBar({ value, onChange, placeholder, wrapperClassName, inputClassName }: SearchBarProps) {
  return (
    <div className={`relative flex-1 max-w-md ${wrapperClassName || ''}`}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder={placeholder || "Search..."}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`pl-9 w-full ${inputClassName || ''}`}
        />
      </div>
    </div>
  );
}
