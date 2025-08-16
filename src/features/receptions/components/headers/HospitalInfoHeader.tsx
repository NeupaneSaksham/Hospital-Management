interface HospitalInfoHeaderProps {
  logoSrc: string;
  name: string;
  typeText?: string;
  location?: string;
  contact?: string;
  email?: string;
  billCode?: string;
  panNo?: string;
}

export default function HospitalInfoHeader({
  logoSrc,
  name,
  typeText = 'PVT LTD',
  location,
  contact,
  email,
  billCode,
  panNo,
}: HospitalInfoHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6 p-4 rounded-lg">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center justify-center gap-2">
          <img src={logoSrc} alt={name} className="w-20 h-20 object-contain" />
          {name} <span className="text-sm font-normal">{typeText}</span>
        </h3>
        <div className="text-sm text-gray-600 mt-1 space-y-1">
          {location && <div>{location}</div>}
          {contact && <div>{contact}</div>}
          {email && <div>{email}</div>}
          {(billCode || panNo) && (
            <div className="flex items-center justify-center gap-4 mt-2">
              {billCode && <span>Bill Code : {billCode}</span>}
              {panNo && <span>PAN No. : {panNo}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


