import RadioGroup from "../forms/inputfields/RadioGroup";
import TextareaField from "./TextareaField";
import { User, Calendar, FileText } from "lucide-react";

interface SpecialFieldsProps {
  formData: {
    gender: string;
    appointmentType: string;
    admissionNotes: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SpecialFields({ formData, onChange }: SpecialFieldsProps) {
  const isOPD = formData.appointmentType === 'OPD';
  const isEmergency = formData.appointmentType === 'Emergency';
  return (
    <>
      {/* Gender Radio Group - spans full width */}
      <div className="col-span-2">
        <RadioGroup
          label="Gender"
          icon={User}
          name="gender"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Other", label: "Other" }
          ]}
          value={formData.gender}
          onChange={(value) => onChange("gender", value)}
        />
      </div>

      {/* Appointment Type - single select */}
      <div className="col-span-2">
        <RadioGroup
          label="Appointment Type"
          icon={Calendar}
          name="appointmentType"
          options={[
            { value: "OPD", label: "OPD" },
            { value: "IPD", label: "IPD" },
            { value: "Emergency", label: "Emergency" }
          ]}
          value={formData.appointmentType}
          onChange={(value) => onChange("appointmentType", value)}
          useCheckbox={true}
        />
      </div>

      {/* Notes Textarea - spans full width */}
      <div className="col-span-2">
        <TextareaField
          label={isOPD ? "Consultation Note" : isEmergency ? "Emergency Notes" : "Admission Notes"}
          icon={FileText}
          value={formData.admissionNotes}
          onChange={(value) => onChange("admissionNotes", value)}
          placeholder={isOPD ? "Enter consultation notes..." : isEmergency ? "Enter emergency notes..." : "Enter admission notes..."}
        />
      </div>
    </>
  );
}
