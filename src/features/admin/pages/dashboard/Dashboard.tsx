
import { Users, Calendar, UserCheck, DollarSign } from "lucide-react"
import { ProfessionalInfoCard } from "../../components/dashboard/utils/professional-info-card"
import PatientOverview from "../../components/dashboard/PatientOverviewChart"
import { TopDepartmentChart } from "../../components/dashboard/TopDepartmentChart"
import TopDoctorsTable from "../../components/dashboard/TopDoctorsTable"
import { RevenueChart } from "../../components/dashboard/RevenueChart"

export default function Dashboard() {
  const metrics = [
    {
      icon: Users,
      value: "1,624",
      label: "Total Doctors",
      trend: { value: "12%", isPositive: true },
      accentColor: "bg-blue-500",
    },
    {
      icon: Calendar,
      value: "1,847",
      label: "Total Appointments",
      trend: { value: "8%", isPositive: true },
      accentColor: "bg-teal-500",
    },
    {
      icon: UserCheck,
      value: "2,156",
      label: "Total Patients",
      trend: { value: "15%", isPositive: true },
      accentColor: "bg-green-500",
    },
    {
      icon: DollarSign,
      value: "Rs.160k",
      label: "Total Revenue",
      trend: { value: "23%", isPositive: true },
      accentColor: "bg-yellow-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="grid gap-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <ProfessionalInfoCard key={index} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-10 gap-6">
          <div className="xl:col-span-7">
            <PatientOverview />
          </div>
          <div className="xl:col-span-3">
            <TopDepartmentChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <TopDoctorsTable />
          </div>
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
        </div>
      </div>
    </div>
  )
}
