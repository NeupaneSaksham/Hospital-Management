import { Input } from "@/components/ui/input";
import type { LucideIcon } from "lucide-react";

interface FormFieldProps {
  label: string;
  icon?: LucideIcon;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  customIcon?: React.ReactNode;
}

export default function FormField({
  label,
  icon: Icon,
  required = false,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
  customIcon
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {customIcon ? customIcon : (Icon && <Icon className="w-4 h-4" />)}
        <span>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </span>
      </div>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border-gray-300 ${className}`}
      />
    </div>
  );
}
