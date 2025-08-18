import { useState } from "react";
import MedicalHistory from '@/features/receptions/pages/medical-history/MedicalHistory';
import PatientSidebar from '@/features/receptions/components/patient-sidebar/PatientSidebar';
import HeaderButton from "../../components/patient/header-button";
import LabReport from "./lab-report";
import Createcard from "./create-card";

export default function PatientHistory() {
  const [activeTab, setActiveTab] = useState("Medical History");

  const tabs = ["Medical History", "Create Card", "Lab Reports"];

  const patient = {
    id: "10001",
    name: "Baburao G. Aapte",
    phone: "9812345678",
    doctor: "Dr. Ramesh",
    disease: "Disease",
    appointment_date: "2019/2/14",
    appointement_type: "OPD",
    status: "Active",
    email: "baburao@example.com",
    bloodType: "O+",
    age: 45,
    gender: "Male",
    primaryDoctor: "Dr. Ramesh",
  };

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4 min-h-screen bg-gray-100">
      <HeaderButton
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      <div className="flex flex-col md:flex-row gap-6">
        <PatientSidebar patient={patient}/>
        <div className="flex-1 space-y-6">
          {activeTab === "Medical History" && <MedicalHistory />}
          {activeTab === "Create Card" && (
            <Createcard />
          )}
          {activeTab === "Lab Reports" && <LabReport/>}
        </div>
      </div>
    </div>
  );
}