import { API } from "@/api/client";
import { endpoint } from "@/features/doctor/services/patient.endpoint";
import type { Patient } from "@/features/doctor/types/patient.types";

interface PatientResponse {
  status: string;
  message: string;
  data: Patient[] | Patient;
}

export const patientApi = {
  getPatients: async (): Promise<Patient[]> => {
    const res = await API.get<PatientResponse>(endpoint.getPatients);
    return Array.isArray(res.data?.data) ? res.data.data : [];
  },
  getPatientById: async (id: string): Promise<Patient> => {
    const res = await API.get<PatientResponse>(`${endpoint.getPatients}${id}/`);
    return res.data?.data as Patient;
  },
};