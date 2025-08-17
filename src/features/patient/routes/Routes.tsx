import { Routes, Route,Navigate} from "react-router-dom"
import Layout from "../layout"
import { lazy } from "react"
import PatientHistory from "../pages/medical-history/patient-history"
import VisitDetail from "../pages/visits/visit-detail"
import ReportDetails from "../pages/reports/report-details"


const Visit = lazy(() => import("../pages/visits/visit"))
const Reports = lazy(() => import("../pages/reports/reports"))
const Billing = lazy(() => import("../pages/billing/billing"))
const Billingdetails = lazy(() => import("../pages/billing/billing-details"))
export default function PatientRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
            <   Route path="/" element={<Navigate to="visit" replace />} />
                <Route path="visit">
                    <Route index element={<Visit />} />
                    <Route path=":id" element={<VisitDetail />} />
                </Route>
                <Route path="reports">
                    <Route index element={<Reports />} />
                    <Route path=":id" element={<ReportDetails/>} />
                </Route>
                <Route path="medical-history" element={<PatientHistory />} />
                <Route path="billing">
                    <Route index element={<Billing />} />
                    <Route path=":id/billdetails" element={<Billingdetails />} />
                </Route>
            </Route>
        </Routes>
    )
}