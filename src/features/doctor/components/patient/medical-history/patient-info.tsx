interface PatientInfoProps {
  name: string;
  email: string;
  patientId: string;
  phone: string;
  age: number;
  gender: string;
  primaryDoctor: string;
}

export default function PatientInfo({
  name,
  email,
  patientId,
  phone,
  age,
  gender,
  primaryDoctor,
}: PatientInfoProps) {
  return (
    <div className="p-4 border rounded shadow-sm w-72">
      <div className="text-center mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
          {name[0]}
        </div>
        <h3 className="font-bold mt-2">{name}</h3>
        <p className="text-sm text-green-600">{email}</p>
        <span className="text-xs text-gray-500">Active</span>
      </div>
      <div className="text-sm">
        <p><strong>Patient ID:</strong> {patientId}</p>
        <p><strong>Phone Number:</strong> {phone}</p>
        <p><strong>Age:</strong> {age}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Primary Doctor:</strong> {primaryDoctor}</p>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <button className="bg-gray-200 py-1 rounded">View Details</button>
        <button className="bg-gray-200 py-1 rounded">Edit Details</button>
      </div>
    </div>
  );
}