import React from "react";

interface HospitalHeaderProps {
  hospitalName: string;
  hospitalSubtitle: string;
  location: string;
  contact: string;
  website: string;
  billCode: string;
  panNo: string;
}

const HospitalHeader: React.FC<HospitalHeaderProps> = ({
  hospitalName,
  hospitalSubtitle,
  location,
  contact,
  website,
  billCode,
  panNo,
}) => (
  <div className="flex items-start justify-between mb-8">
    <div className="flex items-center gap-4">
      {/* Hospital Logo */}
      <div className="w-20 h-20 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-sm">
        <div className="text-center">
          <div className="text-xs">EVEREST HOSPITAL</div>
          <div className="text-lg">+</div>
          <div className="text-xs">BIRTAMODE, NEPAL</div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-black">{hospitalName}</h1>
        <p className="text-sm text-gray-600 mt-1">{hospitalSubtitle}</p>
      </div>
    </div>
    <div className="text-right text-sm text-gray-600">
      <div>{location}</div>
      <div>{contact}</div>
      <div className="text-black">{website}</div>
      <div className="mt-2">
        <div>BillCode : {billCode}</div>
        <div>PAN No. : {panNo}</div>
      </div>
    </div>
  </div>
);

export default HospitalHeader;
