import { Label } from "../../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";

interface SelectFieldOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options: SelectFieldOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function SelectField({ 
  label, 
  options, 
  value, 
  onChange,
  className 
}: SelectFieldProps) {
  return (
    <div>
      <Label className="text-gray-700 mb-2 block">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className={`border-gray-300 ${className }`}>
          <SelectValue placeholder={`Choose ${label}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
