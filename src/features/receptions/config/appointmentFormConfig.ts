import {
  User,
  Mail,
  BarChart3,
  Phone,
  MapPin,
  Stethoscope,
  UserCheck,
  Calendar,
  WormIcon as Virus,
  Bed,
  FileText,
  Receipt,
  Diamond,
} from "lucide-react";

export const appointmentFormConfig = {
  personalDetails: {
    title: "Personal Details",
    fields: [
      {
        type: 'input' as const,
        name: 'name',
        label: 'Name',
        icon: User,
        required: true
      },
      {
        type: 'input' as const,
        name: 'email',
        label: 'Email',
        icon: Mail
      },
      {
        type: 'input' as const,
        name: 'age',
        label: 'Age',
        icon: BarChart3,
        required: true,
        inputType: 'number'
      },
      {
        type: 'input' as const,
        name: 'phone',
        label: 'Phone',
        icon: Phone,
        required: true,
        inputType: 'tel'
      },
      {
        type: 'input' as const,
        name: 'address',
        label: 'Address',
        icon: MapPin
      }
    ]
  },
  
  appointmentDetails: {
    title: "Appointment Details",
    fields: [
      {
        type: 'select' as const,
        name: 'department',
        label: 'Department',
        icon: Stethoscope,
        required: true,
        options: [{ value: "Neurology", label: "Neurology" }],
        onAddNew: () => console.log('Adding new department...')
      },
      {
        type: 'select' as const,
        name: 'doctorName',
        label: 'Doctor Name',
        icon: UserCheck,
        options: [{ value: "Ram Mohan Acharya", label: "Ram Mohan Acharya" }],
        onAddNew: () => console.log('Adding new doctor...')
      },
      {
        type: 'date' as const,
        name: 'appointmentDate',
        label: 'Appointment Date',
        icon: Calendar,
        required: true
      },
      {
        type: 'input' as const,
        name: 'diseases',
        label: 'Diseases',
        icon: Virus
      }
    ]
  },
  
  inpatientDetails: {
    title: "Inpatient Details",
    fields: [
      {
        type: 'select' as const,
        name: 'section',
        label: 'Choose Section',
        icon: FileText,
        options: [{ value: "Ward", label: "Ward" }]
      },
      {
        type: 'select' as const,
        name: 'bedNumber',
        label: 'Bed Number',
        icon: Bed,
        options: [{ value: "1111", label: "1111" }]
      },
      {
        type: 'date' as const,
        name: 'startingDate',
        label: 'Starting Date',
        icon: Calendar
      }
    ]
  },
  
  billAndCharges: {
    title: "Bill and Charges",
    fields: [
      {
        type: 'input' as const,
        name: 'doctorCharge',
        label: 'Doctor Charge',
        icon: User,
        required: true,
        inputType: 'number'
      },
      {
        type: 'input' as const,
        name: 'billCharge',
        label: 'Bill Charge',
        icon: Receipt,
        inputType: 'number'
      },
      {
        type: 'input' as const,
        name: 'otherCharges',
        label: 'Other Charges',
        icon: Diamond,
        className: 'col-span-2'
      }
    ]
  }
};

export const appointmentTypeOptions = [
  { value: "OPD", label: "OPD" },
  { value: "IPD", label: "IPD" },
  { value: "Emergency", label: "Emergency" }
];

export const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" }
];
