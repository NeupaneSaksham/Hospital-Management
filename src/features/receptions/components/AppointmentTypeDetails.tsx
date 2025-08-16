import React from "react";

interface DetailItem {
  label: string;
  value: string;
}

interface AppointmentTypeDetailsProps {
  sectionTitle: string;
  notesLabel: string;
  details: DetailItem[];
  notes: string;
}

const AppointmentTypeDetails: React.FC<AppointmentTypeDetailsProps> = ({
  sectionTitle,
  notesLabel,
  details,
  notes,
}) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold text-gray-700 mb-3">{sectionTitle}</h2>
    <div className="border border-gray-300 p-4 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        {details.map((item, idx) => (
          <div key={idx} className="flex">
            <span className="font-medium w-40">{item.label}</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{item.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <span className="font-medium w-40">{notesLabel}</span>
        <span className="mr-2">:</span>
        <span className="text-gray-600">{notes}</span>
      </div>
    </div>
  </div>
);

export default AppointmentTypeDetails;
