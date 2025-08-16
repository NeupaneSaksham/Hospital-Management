import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import FormField from "../../inputfields/FormField";
import CustomSelectField from "../../inputfields/CustomSelectField";
import DateInput from "../../inputfields/DateInput";
import TextareaField from "../../inputfields/TextareaField";

interface FormFieldConfig {
  type: 'input' | 'select' | 'date' | 'textarea';
  name: string;
  label: string;
  icon?: LucideIcon;
  required?: boolean;
  placeholder?: string;
  inputType?: string;
  className?: string;
  options?: { value: string; label: string }[];
  onAddNew?: () => void;
  customIcon?: React.ReactNode;
}

interface AppointmentFormSectionProps {
  title: string;
  fields: FormFieldConfig[];
  formData: Record<string, any>;
  onChange: (field: string, value: string) => void;
  className?: string;
  extraContent?: ReactNode;
}

export default function AppointmentFormSection({
  title,
  fields,
  formData,
  onChange,
  className = "",
  extraContent
}: AppointmentFormSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  const renderField = (field: FormFieldConfig) => {
    const commonProps = {
      label: field.label,
      // Use customIcon if present, otherwise icon
      icon: undefined,
      required: field.required,
      value: formData[field.name],
      onChange: (value: string) => onChange(field.name, value),
      className: field.className,
      customIcon: field.customIcon,
    };

    switch (field.type) {
      case 'input':
        return (
          <FormField
            {...commonProps}
            icon={field.customIcon ? undefined : field.icon}
            customIcon={field.customIcon}
            type={field.inputType || 'text'}
            placeholder={field.placeholder}
          />
        );
      case 'select':
        return (
          <CustomSelectField
            {...commonProps}
            icon={field.customIcon ? undefined : field.icon}
            customIcon={field.customIcon}
            options={field.options || []}
            onAddNew={field.onAddNew}
          />
        );
      case 'date':
        return (
          <DateInput
            {...commonProps}
            icon={field.customIcon ? undefined : field.icon}
            customIcon={field.customIcon}
            placeholder={field.placeholder}
          />
        );
      case 'textarea':
        return (
          <TextareaField
            {...commonProps}
            icon={field.customIcon ? undefined : field.icon}
            customIcon={field.customIcon}
            placeholder={field.placeholder}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        className="flex items-center gap-2 text-gray-600 font-medium w-full text-left"
      >
        <span>{title}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="grid grid-cols-2 gap-6">
          {fields.map((field) => (
            <div key={field.name} className={field.className || ''}>
              {renderField(field)}
            </div>
          ))}
          {extraContent}
        </div>
      )}
    </div>
  );
}
