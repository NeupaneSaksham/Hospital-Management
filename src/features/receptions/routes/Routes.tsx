import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "../layout/Layout"
import { lazy } from "react"

const Patients = lazy(() => import("../pages/patient/Patients"))
const AddPatient = lazy(() => import("../pages/patient/AddPatient"))
const Visits = lazy(() => import("../pages/visit/Visits"))
const Appointments = lazy(() => import("../pages/appointment/Appointments"))
const AppointmentList = lazy(() => import("../pages/appointment/AppointmentList"))
const ManageAppointment = lazy(() => import("../pages/appointment/ManageAppointment"))
const BillingHistory = lazy(() => import("../pages/billing/BillingHistory"))

export default function ReceptionRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="patients" replace />} />
        
        <Route path="patients">
          <Route index element={<Patients />} />
          <Route path="add" element={<AddPatient />} />
          <Route path="visits/:id" element={<Visits />} />
          <Route path="billing/:id" element={<BillingHistory />} />
        </Route>

        <Route path="appointments">
          <Route index element={<Navigate to="list" replace />} />
          <Route path="list" element={<AppointmentList />} />
          <Route path="create" element={<Appointments />} />
          <Route path="shortlist" element={<Appointments />} />
          <Route path="manage" element={<ManageAppointment />} />
        </Route>

        <Route path="*" element={<Navigate to="patients" replace />} />
      </Route>
    </Routes>
  )
}