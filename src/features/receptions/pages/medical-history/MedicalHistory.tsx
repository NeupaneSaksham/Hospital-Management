import DownloadButton from "../../../doctor/components/patient/medical-history/download-button";
import HospitalLogo from "../../../../assets/hospital-logo/MAKALU-LOGO 1.svg"
import HospitalInfoHeader from "../../components/headers/HospitalInfoHeader"
import InfoGrid from "../../components/tables/InfoGrid"
import RecordSection from "../../components/tables/RecordSection"

export default function MedicalHistory() {

  const handleDownload = () => {
    console.log("Download button clicked");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-fit mb-5">

      {/* Page Header (outside border) */}
      <div className="mb-5 text-left flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Patients History</h2>
          <p className="text-gray-500 text-sm">Record Of All Patient Visits To The Hospital</p>
        </div>
        <DownloadButton onClick={handleDownload} />
      </div>

      {/* Patients History Section */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">

        {/* Hospital Header */}
        <HospitalInfoHeader
          logoSrc={HospitalLogo}
          name="Makalu Everest Hospital"
          typeText="PVT LTD"
          location="Location"
          contact="Contact"
          email="www.user@email.com"
          billCode="9274855952"
          panNo="ABCDEFGHIJ"
        />

        {/* Patient Info Row */}
        <InfoGrid
          items={[
            { label: 'User Id', value: '11111' },
            { label: 'Name', value: 'Patient Name' },
            { label: 'Age', value: 'Patient Age' },
            { label: 'Phone no', value: 'Patient Age' },
          ]}
          columns={4}
        />

        {/* Medical Records */}
        <div className="space-y-6">
          <RecordSection
            date="2025/7/13"
            symptoms="No cough, vomiting, or rash, No signs of respiratory distress."
            labs={['Complete Blood Count (CBC)', 'Dengue NS1 Antigen', 'Malaria Parasite Test (MP Test)', 'Urine Routine/Microscopy']}
            medicines={[
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
            ]}
          />

          <RecordSection
            date="2025/6/13"
            symptoms="No cough, vomiting, or rash, No signs of respiratory distress."
            labs={['Complete Blood Count (CBC)', 'Dengue NS1 Antigen', 'Malaria Parasite Test (MP Test)', 'Urine Routine/Microscopy']}
            medicines={[
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
            ]}
          />

          <RecordSection
            date="2025/5/13"
            symptoms="No cough, vomiting, or rash, No signs of respiratory distress."
            labs={['Complete Blood Count (CBC)', 'Dengue NS1 Antigen', 'Malaria Parasite Test (MP Test)', 'Urine Routine/Microscopy']}
            medicines={[
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
              'Paracetamol 500mg - Take 1 Tablet Every 6-8 Hours For 3-5 Days',
            ]}
          />
        </div>
      </div>
    </div>
  )
}