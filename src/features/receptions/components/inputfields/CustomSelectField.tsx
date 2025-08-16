import { ChevronDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface CustomSelectFieldProps {
  label: string;
  icon?: LucideIcon;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  onAddNew?: () => void;
  className?: string;
  customIcon?: React.ReactNode;
}

export default function CustomSelectField({
  label,
  icon: Icon,
  required = false,
  value,
  onChange,
  options,
  onAddNew,
  className = "",
  customIcon
}: CustomSelectFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {customIcon ? customIcon : (Icon && <Icon className="w-4 h-4" />)}
        <span>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded appearance-none bg-white pr-10"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        {onAddNew && (
          <Button
            size="sm"
            className="w-8 h-8 p-0 bg-black text-white"
            onClick={onAddNew}
            aria-label="Add new"
          >
            <Plus className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
