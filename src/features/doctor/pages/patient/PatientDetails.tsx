"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { usePatient } from "@/features/doctor/hooks/usePatient";
import MedicalHistory from "@/features/receptions/pages/medical-history/MedicalHistory";
import PatientSidebar from "@/features/receptions/components/patient-sidebar/PatientSidebar";
import HeaderButton from "@/features/doctor/components/patient/header-button";
import LabReport from "@/features/doctor/pages/patient/lab-report";
import CreateCard from "@/features/doctor/pages/patient/create-card";

export default function PatientDetails() {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab") || "Create Card";
  const [activeTab, setActiveTab] = useState(tabFromUrl);

  const tabs = ["Create Card", "Medical History", "Lab Reports"];

  const { data: patient, isLoading, error } = usePatient(id || "");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  useEffect(() => {
    setActiveTab(tabFromUrl);
  }, [tabFromUrl]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error.message}</div>;
  if (!patient) return <div>Patient not found</div>;

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-4 min-h-screen bg-gray-100">
      <HeaderButton tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />
      <div className="flex flex-col md:flex-row gap-6">
        <PatientSidebar patient={patient} />
        <div className="flex-1 space-y-6">
          {activeTab === "Medical History" && <MedicalHistory />}
          {activeTab === "Create Card" && <CreateCard />}
          {activeTab === "Lab Reports" && <LabReport />}
        </div>
      </div>
    </div>
  );
}

