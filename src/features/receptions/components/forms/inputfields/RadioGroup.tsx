import type { LucideIcon } from "lucide-react";

interface RadioGroupProps {
  label: string;
  icon?: LucideIcon;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
  useCheckbox?: boolean; 
}

export default function RadioGroup({
  label,
  icon: Icon,
  name,
  options,
  value,
  onChange,
  className = "",
  useCheckbox = false, 
}: RadioGroupProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {Icon && <Icon className="w-4 h-4" />}
        <span>{label}</span>
      </div>
      <div className="flex gap-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              type={useCheckbox ? "checkbox" : "radio"}
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="w-4 h-4"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
