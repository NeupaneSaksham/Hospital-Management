import { Input } from "@/components/ui/input";
import { CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface DateInputProps {
  label: string;
  icon?: LucideIcon;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  customIcon?: React.ReactNode;
}

export default function DateInput({
  label,
  icon: Icon,
  required = false,
  value,
  onChange,
  placeholder,
  className = "",
  customIcon
}: DateInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {customIcon ? customIcon : (Icon && <Icon className="w-4 h-4" />)}
        <span>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </div>
      <div className="relative">
        <Input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`border-gray-300 pr-10 ${className}`}
        />
        <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
}
