"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PatientLoader from "@/features/doctor/components/loaders/patient-loader";
import { PatientTable } from "@/features/doctor/components/patient/patient-table";

const queryClient = new QueryClient();

export default function PatientPage() {
  return (
    <div className="p-6">
      <h1 className="text-md font-medium text-gray-900 mb-4 pb-2 border-b-2 border-[#0ABAB5] w-fit">
        Patient Info
      </h1>
      <div className="bg-white rounded-lg shadow p-6">
        <QueryClientProvider client={queryClient}>
          <PatientLoader>
            <PatientTable />
          </PatientLoader>
        </QueryClientProvider>
      </div>
    </div>
  );
}