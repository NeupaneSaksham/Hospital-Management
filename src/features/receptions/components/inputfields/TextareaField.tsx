import { Textarea } from "@/components/ui/textarea";
import type { LucideIcon } from "lucide-react";

interface TextareaFieldProps {
  label: string;
  icon?: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  customIcon?: React.ReactNode;
}

export default function TextareaField({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  className = "",
  rows = 4,
  customIcon
}: TextareaFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {customIcon ? customIcon : (Icon && <Icon className="w-4 h-4" />)}
        <span>{label}</span>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`border-gray-300 min-h-32 resize-y ${className}`}
        rows={rows}
      />
    </div>
  );
}
