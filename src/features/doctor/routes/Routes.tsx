import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "../layout"
import { lazy } from "react"
import PatientDetails from "../pages/patient/PatientDetails"
import RequestImage from "../components/labs/request-image"

const Dashboard = lazy(() => import("../pages/dashboard/dashboard"))
const PatientList = lazy(() => import("../pages/patient/PatientList"))
const AppointmentList = lazy(() => import("../pages/appointment/list/AppointmentList"))
const AppointmentShortlist = lazy(() => import("../pages/appointment/shortlist/AppointmentShortlist"))
const LabRequest = lazy(() => import("../pages/lab/request/LabRequest"))
const LabResult = lazy(() => import("../pages/lab/result/LabResult"))

export default function DoctorRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Navigate to="dashboard" replace />} />
        

        <Route path="dashboard" element={<Dashboard />} />
        
        <Route path="patients">
          <Route index element={<PatientList />} />
          <Route path=":id" element={<PatientDetails />} />
        </Route>

        <Route path="appointments">
          <Route index element={<Navigate to="list" replace />} />
          <Route path="list" element={<AppointmentList />} />
          <Route path="shortlist" element={<AppointmentShortlist />} />
        </Route>
        

        <Route path="lab">
          <Route index element={<Navigate to="request" replace />} />
          <Route path="request" element={<LabRequest />} />
          <Route path="result" element={<LabResult />} />
          <Route path="result/:id" element={<RequestImage />} />
        </Route> 
  
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  )
}
