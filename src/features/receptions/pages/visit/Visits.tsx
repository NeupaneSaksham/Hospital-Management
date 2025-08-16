import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { patientData } from '../patient/Patients';
import { SearchBar } from '../../components/search/SearchBar';
import PatientSidebar from '../../components/patient-sidebar/PatientSidebar';
import TabsNav from '../../components/navs/TabsNav';
import SectionHeader from '../../components/headers/SectionHeader';
import VisitsTable from '../../components/tables/VisitsTable';
import type { Patient } from '../../types/patient';
import type { Visit } from '../../types/visit';
import TimeRangeButton from '../../components/buttons/TimeRangeButton';
import DownloadButton from '../../components/buttons/DownloadButton';
import BillingHistory from '../billing/BillingHistory';
import MedicalHistory from '../medical-history/MedicalHistory';

const visits: Visit[] = [
  {
    date: '2020-3-21',
    visitType: 'IPD',
    doctor: 'Dr.Suman',
    department: 'Neurology',
    notes: 'Blood Pressure Consistently E...',
  },
  {
    date: '2020-3-21',
    visitType: 'OPD',
    doctor: 'Dr.Rohit',
    department: 'Neurology',
    notes: 'Blood Pressure Consistently E...',
  },
 
]

export default function Visits() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Visits');
  const [loading, setLoading] = useState<boolean>(true);
  const tabs = ['Visits', 'Billing History', 'Medical History'];
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredVisits, setFilteredVisits] = useState<Visit[]>(visits);
  const [currentPatient, setCurrentPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (id) {
      const patient = patientData.find((p) => p.id === id);
      if (patient) {
        setCurrentPatient({
          ...patient,
          email: 'patient@example.com',
          bloodType: 'B+',
          age: 35,
          gender: 'Male',
          primaryDoctor: patient.doctor,
        });
        setLoading(false);
      } else {
        navigate('/patients');
      }
    } else {
      navigate('/patients');
    }
  }, [id, navigate]);

  useEffect(() => {
    const filtered = visits.filter((visit) =>
      Object.values(visit).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    setFilteredVisits(filtered);
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <PatientSidebar
        patient={currentPatient as Patient}
      />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-50">
        <div className="bg-white px-6 py-4 flex items-center justify-end gap-2 border-b border-gray-200">
        </div>

        <TabsNav
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          right={activeTab === 'Medical History' ? <DownloadButton /> : null}
        />

        <div className="p-6">
          {activeTab === 'Visits' && (
            <div className="bg-fixed rounded-lg border-none mb-4">
              <SectionHeader
                title="Doctor Visits"
                subtitle="Record Of All Patient Visits To The Clinic"
                right={
                  <>
                    <div className="relative">
                      <SearchBar
                        value={searchTerm}
                        onChange={setSearchTerm}
                        placeholder="Search visits..."
                      />
                    </div>
                    <TimeRangeButton />
                    <DownloadButton />
                  </>
                }
              />

              {filteredVisits.length > 0 ? (
                <VisitsTable visits={filteredVisits} />
              ) : (
                <div className="p-6 bg-gray-100 rounded-lg text-center">
                  <p className="text-gray-600 text-sm">
                    No visits found matching your search.
                  </p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Billing History' && (
            <BillingHistory />
          )}

          {activeTab === 'Medical History' && (
            <MedicalHistory />
          )}
        </div>
      </div>
    </div>
  );
}
