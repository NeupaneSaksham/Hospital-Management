type AppointmentDay = {
  day: string
  total: number
}

type PatientTimeRegistration = {
  morning: number
  afternoon: number
  evening: number
}

type AppointmentStatus = {
  under_treatment: number
  discharged: number
  admitted: number
}

export interface DashboardSummary {
  current_week_appointments: AppointmentDay[]
  last_week_appointments: AppointmentDay[]
  patient_time_registration_count: PatientTimeRegistration
  appointment_status: AppointmentStatus
  recent_patients: any[]
}
