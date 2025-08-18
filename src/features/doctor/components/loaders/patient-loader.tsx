"use client";

import type { ReactNode } from "react";
import { usePatients } from "@/features/doctor/hooks/usePatient";
import LoadingSpinner from "@/components/loading-spinner";

export default function PatientLoader({ children }: { children: ReactNode }) {
  const { isLoading, error } = usePatients();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error.message}</div>;

  return <>{children}</>;
}