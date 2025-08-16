import React from "react";

interface PatientDetailsProps {
  id: string;
  name: string;
  age: string;
  password?: string;
  phone: string;
  address: string;
}

const PatientDetails: React.FC<PatientDetailsProps> = ({
  id,
  name,
  age,
  password,
  phone,
  address,
}) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-gray-700 mb-3">PATIENT DETAILS</h2>
    <div className="border border-gray-300 p-4 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex">
            <span className="font-medium w-20">User Id</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{id}</span>
          </div>
          <div className="flex">
            <span className="font-medium w-20">Name</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{name}</span>
          </div>
          <div className="flex">
            <span className="font-medium w-20">Age</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{age}</span>
          </div>
        </div>
        <div className="space-y-2">
          {password && (
            <div className="flex">
              <span className="font-medium w-20">Password</span>
              <span className="mr-2">:</span>
              <span className="text-gray-600">{password}</span>
            </div>
          )}
          <div className="flex">
            <span className="font-medium w-20">Phone</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{phone}</span>
          </div>
          <div className="flex">
            <span className="font-medium w-20">Address</span>
            <span className="mr-2">:</span>
            <span className="text-gray-600">{address}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PatientDetails;
