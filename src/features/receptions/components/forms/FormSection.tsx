import { ChevronDown } from "lucide-react";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormSection({ title, children, className = "" }: FormSectionProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center gap-2 text-gray-600 font-medium">
        <span>{title}</span>
        <ChevronDown className="w-4 h-4" />
      </div>
      {children}
    </div>
  );
}
