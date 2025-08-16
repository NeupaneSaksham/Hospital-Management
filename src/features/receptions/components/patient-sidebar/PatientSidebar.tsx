import { ArrowLeft } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { Badge } from '../../../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import type { Patient } from '../../types/patient';
import InfoRow from '../tables/InfoRow';

interface PatientSidebarProps {
  patient: Patient;
  onViewDetails?: () => void;
  onEditDetails?: () => void;
}

export default function PatientSidebar({
  patient,
  onViewDetails,
  onEditDetails,
}: PatientSidebarProps) {
  return (
    <div className="w-full md:w-80 bg-white border-b-4 md:border-b-0 md:border-r-4 border-none p-4 md:p-6">
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <Button
          variant="outline"
          size="sm"
          className="p-1 bg-white border-gray-300 hover:bg-gray-50"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-base font-medium">Back</span>
        </Button>
      </div>

      <div className="mb-4 md:mb-6">
        <h2 className="text-lg md:text-xl font-bold mb-1">Patient Information</h2>
        <p className="text-sm text-gray-500">Registered By Someone</p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-20 h-20 mb-4 bg-teal-400">
          <AvatarFallback className="text-2xl font-bold text-black bg-teal-400">
            {patient.name.trim().charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="text-center mb-3">
          <h3 className="font-bold text-lg">{patient.name}</h3>
          {patient.email && (
            <p className="text-sm text-gray-600">{patient.email}</p>
          )}
        </div>

        {patient.status && (
          <Badge className="bg-green-500 text-white hover:bg-green-500 px-3 py-1 rounded-full text-xs font-medium">
            {patient.status}
          </Badge>
        )}
      </div>

      <div className="space-y-4 mb-8">
        <InfoRow label="Patient ID" value={patient.id} />
        {patient.bloodType && <InfoRow label="Blood Type" value={patient.bloodType} />}
        {typeof patient.age !== 'undefined' && <InfoRow label="Age" value={patient.age as number} />}
        {patient.gender && <InfoRow label="Gender" value={patient.gender} />}
        {patient.primaryDoctor && (
          <InfoRow label="Primary Doctor" value={patient.primaryDoctor} />
        )}
      </div>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
          onClick={onViewDetails}
        >
          View Details
        </Button>
        <Button
          variant="outline"
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
          onClick={onEditDetails}
        >
          Edit Details
        </Button>
      </div>
    </div>
  );
}


