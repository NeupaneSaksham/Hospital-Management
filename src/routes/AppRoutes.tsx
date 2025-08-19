import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import LoadingSpinner from '@/components/loading-spinner'

const DoctorRoutes = lazy(() => import('../features/doctor/routes/Routes'))
const AuthRoutes = lazy(() => import('../features/auth/routes/Routes'))
const AdminRoutes = lazy(() => import('../features/admin/routes/Routes'))
// const AdminRoutes = lazy(() => import('../features/admin/routes/Routes'))
const PatientRoutes = lazy(() => import('../features/patient/routes/Routes'))
const LabRoutes = lazy(() => import('../features/lab/routes/routes'))
const PharmacyRoutes = lazy(() => import('../features/pharmacy/routes/Routes'))
const ReceptionRoutes = lazy(() => import('../features/receptions/routes/Routes'))
// const SuperRoutes = lazy(() => import('../features/super/routes/Routes'))

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
      <Route 
          path="/auth/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AuthRoutes />
            </Suspense>
            
          }
           
        />

        {/* Doctor Routes */}
        <Route 
          path="/doctor/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <DoctorRoutes />
            </Suspense>
            
          }
           
        />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />

        <Route 
          path="/admin/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AdminRoutes />
            </Suspense>
          } 
        />

        <Route 
          path="/patient/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PatientRoutes />
            </Suspense>
          } 
        />

        <Route 
          path="/lab/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <LabRoutes />
            </Suspense>
          } 
        />

         <Route 
          path="/pharmacy/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <PharmacyRoutes />
            </Suspense>
          } 
        />

        <Route 
          path="/reception/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ReceptionRoutes />
            </Suspense>
          } 
        />

        {/* <Route 
          path="/super/*" 
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SuperRoutes />
            </Suspense>
          } 
        /> 

        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />   
      </Route>
    </Routes>
  )
}

