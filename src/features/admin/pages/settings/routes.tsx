import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layout"
import { lazy } from "react"


const Department = lazy(() => import("./department/Department"))
const Operation = lazy(() => import("./operation/Operation"))
const Radiology = lazy(() => import("./radiology/Radiology"))
const InpatientServices = lazy(() => import("./inpatient-services/InpatientServices"))
const Lab = lazy(() => import("./lab/Lab"))

// Create placeholder components for the missing routes
const PlaceholderComponent = ({ name }: { name: string }) => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">{name} Settings</h2>
    <p>This is a placeholder for {name} settings page</p>
  </div>
)

// const InpatientServices = () => <PlaceholderComponent name="Inpatient Services" />
const Pharmacy = () => <PlaceholderComponent name="Pharmacy" />
const Discharge = () => <PlaceholderComponent name="Discharge" />
const Receptionist = () => <PlaceholderComponent name="Receptionist" />
const Emergency = () => <PlaceholderComponent name="Emergency" />
const Others = () => <PlaceholderComponent name="Others" />

export default function SettingsRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="department" replace />} />
        
        <Route path="department" element={<Department />} />
        <Route path="operation" element={<Operation />} />
        <Route path="radiology" element={<Radiology />} />
        <Route path="lab" element={<Lab />} />
        <Route path="inpatient-services" element={<InpatientServices />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="discharge" element={<Discharge />} />
        <Route path="receptionist" element={<Receptionist />} />
        <Route path="emergency" element={<Emergency />} />
        <Route path="others" element={<Others />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
