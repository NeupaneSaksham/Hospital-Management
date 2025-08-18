import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "../layout"
import { lazy } from "react"


const LabsRequest = lazy(() => import("../pages/request/LabRequest"))
const LabsResult = lazy(() => import("../pages/result/LabResult"))
const Upload = lazy(() => import("../pages/upload"))
const EditAction = lazy(() => import("../pages/request/edit-action"))
const RequestEdit = lazy(() => import("../pages/request/request-edit"))

export default function LabRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Navigate to="request" replace />} />

        <Route path="request">
          <Route index element={<LabsRequest />} />
          <Route path=":id/editsection" element={<EditAction />} />
          <Route path=":id/request-edit" element={<RequestEdit />} />
        </Route>

        <Route path="result">
          <Route index element={<Navigate to="list" replace />} />
          <Route path="list" element={<LabsResult/>} />
          <Route path="upload" element={<Upload/>} />
        </Route> 
  
        <Route path="*" element={<LabsRequest />} />
      </Route>
    </Routes>
  )
}
