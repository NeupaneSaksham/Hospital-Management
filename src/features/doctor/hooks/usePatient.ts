import { useQuery } from "@tanstack/react-query";
import { patientApi } from "../api/patient.api";
import type { Patient } from "../types/patient.types";

const FIVEMINUTE = 5 * 60 * 1000;

export function usePatients() {
  return useQuery<Patient[], Error>({
    queryKey: ["patients"],
    queryFn: () => patientApi.getPatients(),
    staleTime: FIVEMINUTE,
    refetchOnWindowFocus: true,
  });
}

export function usePatient(id: string) {
  return useQuery<Patient, Error>({
    queryKey: ["patient", id],
    queryFn: () => patientApi.getPatientById(id),
    staleTime: FIVEMINUTE,
    refetchOnWindowFocus: true,
    enabled: !!id,
  });
}
