import PatientStats from "../../components/dashboard/patient-stats"
import PatientTimeChart from "../../components/dashboard/patient-time-chart"
import AppointmentsTable from "../../components/dashboard/appointments-table"
import AppointmentSummary from "../../components/dashboard/appointment-summary"

export default function DashboardContent() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <PatientStats />
        <AppointmentsTable />
      </div>

      <div className="space-y-6">
        <PatientTimeChart />
        <AppointmentSummary />
      </div>
    </div>
  )
}
