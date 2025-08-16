import HospitalLogo from "../../../../assets/hospital-logo/MAKALU-LOGO 1.svg"

interface BillInfo {
  billCode: string;
  panNo: string;
  date: string;
}

interface HospitalHeaderProps {
  hospitalInfo: {
    name: string;
    type: string;
    location: string;
    contact: string;
    email: string;
  };
  billInfo: BillInfo;
}

export function HospitalHeader({ hospitalInfo, billInfo }: HospitalHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-24 h-24 mb-4">
        <img src={HospitalLogo} alt="Hospital Logo" className="w-full h-full object-contain" draggable={false} />
      </div>
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-teal-600">{hospitalInfo.name}</h2>
          <span className="text-lg text-gray-600">{hospitalInfo.type}</span>
        </div>
        <div className="text-gray-600 mt-2">
          <div>{hospitalInfo.location}</div>
          <div>{hospitalInfo.contact}</div>
          <div>{hospitalInfo.email}</div>
        </div>
      </div>
      <div className="flex gap-8 text-gray-600">
        <div><span className="font-medium">BillCode:</span> {billInfo.billCode}</div>
        <div><span className="font-medium">PAN No.:</span> {billInfo.panNo}</div>
        <div><span className="font-medium">Date:</span> {billInfo.date}</div>
      </div>
    </div>
  );
}
