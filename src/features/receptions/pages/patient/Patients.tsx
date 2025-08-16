

import { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { SearchBar } from '../../components/search/SearchBar';
import { DateFilter } from '../../components/forms/DateFilter';
import { PatientTable } from '../../components/tables/PatientTable';
import PageHeader from '../../components/headers/PageHeader';
import type { Patient } from '../../types/patient';


export const patientData: Patient[] = [
  {
    id: '1',
    name: 'Raj Dahal',
    phone: '9812345678',
    doctor: 'Person',
    disease: 'Disease',
    appointment_date: '2019/2/14',
    appointement_type: 'IPD',
    status: 'In Progress',
  },
  {
    id: '2',
    name: 'Rupesh Rai',
    phone: '9812345678',
    doctor: 'Person',
    disease: 'Disease',
    appointment_date: '2019/2/14',
    appointement_type: 'IPD',
    status: 'In Progress',
  },
  {
    id: '3',
    name: 'Samir Adhikari',
    phone: '9812345678',
    doctor: 'Person',
    disease: 'Disease',
    appointment_date: '2019/2/14',
    appointement_type: 'Emergency',
    status: 'In Progress',
  },
];

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const normalizeString = (str: string | undefined): string => {
    return (str || '').toLowerCase().replace(/\s+/g, ' ').trim();
  };
  const filteredPatients = patientData.filter((patient) =>
    normalizeString(patient.name).includes(normalizeString(searchTerm))
  );

  return (
    <div className="max-w-full">
      <PageHeader title="Patient Info" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search patients by name..."
          />
          <DateFilter 
            onFilterChange={(filter) => {
              console.log('Selected filter:', filter);
            }}
          />
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => navigate('/reception/patients/add')}>
          <Plus className="h-4 w-4 mr-2" />
          New Patient
        </Button>
      </div>

      <PatientTable
        patients={filteredPatients}
        onAction={{
          onEdit: (id) => {
            console.log('Edit patient:', id);
          },
          onPrint: (id) => {
            console.log('Print patient:', id);
          },
          onVisit: (id) => {
            navigate(`/reception/patients/visits/${patientData[id].id}`);
          },
          onBilling: (id) => {
            navigate(`/reception/patients/billing/${id}`);
          },
          onMedical: (id) => {
            console.log('Medical history:', id);
          },
          onDelete: (id) => {
            console.log('Delete patient:', id);
          },
        }}
      />
    </div>
  );
}