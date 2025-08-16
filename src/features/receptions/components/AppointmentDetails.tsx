import React from "react";

interface AppointmentDetailsProps {
  date: string;
  doctor: string;
  appointment_type: string;
  department: string;
  room: string;
}

const AppointmentDetails: React.FC<AppointmentDetailsProps> = ({
  date,
  doctor,
  appointment_type,
  department,
  room,
}) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-gray-700 mb-3">APPOINTMENT DETAILS</h2>
    <div className="border border-gray-300 p-4 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex">
            <span className="font-medium w-20">Date</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{date}</span>
          </div>
          <div className="flex">
            <span className="font-medium w-20">Doctor</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{doctor}</span>
          </div>
          <div className="flex">
            <span className="font-medium w-20">Type</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{appointment_type}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex">
            <span className="font-medium w-32">Department</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{department}</span>
          </div>
          <div className="flex">
            <span className="font-medium w-32">Room</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{room}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AppointmentDetails;
