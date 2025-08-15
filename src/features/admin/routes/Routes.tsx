import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "../layout"
import { lazy } from "react"


const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"))


const Doctor = lazy(() => import("../pages/section/doctor/Doctor"))
const Lab = lazy(() => import("../pages/section/lab/lab"))
const Reception = lazy(() => import("../pages/section/reception/Reception"))
const Pharmacy = lazy(() => import("../pages/section/pharmacy/Pharmacy"))
const Discharge = lazy(() => import("../pages/section/discharge/Discharge"))
const Emergency = lazy(() => import("../pages/section/emergency/Emergency"))



const List = lazy(() => import("../pages/staff/list/List"))
const Add = lazy(() => import("../pages/staff/add/Add"))
const Report = lazy(() => import("../pages/report/Report"))
const Settings = lazy(() => import("../pages/settings/dashboard/Setting"))
const SettingsRoutes = lazy(() => import("../pages/settings/routes"))



export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Navigate to="dashboard" replace />} />
        

        <Route path="dashboard" element={<Dashboard />} />
        

        <Route path="section" >
          <Route index element={<Navigate to="doctor" replace />} />
          <Route path="doctor" element={<Doctor />} />
          <Route path="lab" element={<Lab />} />
          <Route path="reception" element={<Reception />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="discharge" element={<Discharge />} />
          <Route path="emergency" element={<Emergency />} />
        </Route>

        <Route path="staff">
        <Route index element={<Navigate to="list" replace />} />
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
        </Route>

        <Route path="report" element={<Report/>} />

        <Route path="settings">
          <Route index element={<Settings/>} />
          <Route path="*" element={<SettingsRoutes />} />
        </Route>
  
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  )
}
