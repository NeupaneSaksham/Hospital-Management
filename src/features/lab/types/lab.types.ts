export interface LabRequest {
  id: string;
  patientName: string;
  doctorName: string;
  testType: string;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
  updatedAt: string;
}

// minor logic update 7425
