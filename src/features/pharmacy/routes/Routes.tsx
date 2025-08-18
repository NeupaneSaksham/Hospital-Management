// import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
// // import Layout from "../layout";
// const Stocks = lazy(() => import('../pages/settings/Stocks'));
// const Measurement = lazy(() => import('../pages/settings/Measurement'));
// const Category = lazy(() => import('../pages/settings/Category'));
// const ItemProperty = lazy(() => import('../pages/settings/ItemProperty'));

// // Lazy-loaded components from the first PharmacyRoutes
// const Dashboard = lazy(() => import('../pages/Dashboard'));
// const Patients = lazy(() => import('../pages/Patients'));
// const CreateBill = lazy(() => import('../pages/CreateBill'));
// const StockList = lazy(() => import('../pages/StockList'));
// const AddStock = lazy(() => import('../pages/AddStock'));
// const BillingHistory = lazy(() => import('../pages/BillingHistory'));
// const ViewPatient = lazy(() => import('../pages/ViewPatient'));
// const Settings = lazy(() => import('../pages/settings/Sidebar/Sidebar'));

// export default function PharmacyRoutes() {
//   return (
//     <Routes>
//       <Route>
//         {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
//         <Route path="dashboard" element={<Dashboard />} />
//         <Route path="patients">
//           <Route index element={<Patients />} />
//           <Route path="viewpatient/:id" element={<ViewPatient />} />
//         </Route>
//         <Route path="createbill" element={<CreateBill />} />
//         <Route path="bill/createbill" element={<CreateBill />} />
//         <Route path="stocklist">
//           <Route index element={<StockList />} />
//           <Route path="addstock" element={<AddStock />} />
//         </Route>
//         <Route path="addstock" element={<AddStock />} />
//         <Route path="billinghistory" element={<BillingHistory />} />
//         <Route path="*" element={<Navigate to="dashboard" replace />} />
//         <Route path="settings">
//         <Route index element={<Navigate to="stocks" replace />} />
//         <Route path="stocks" element={<Stocks />} />
//         <Route path="measurements" element={<Measurement />} />
//         <Route path="categories" element={<Category />} />
//         <Route path="properties" element={<ItemProperty />} />
//           // Add routes for other sections as needed
//         </Route>
//       </Route>
//     </Routes>
//   );
// }



import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

const Stocks = lazy(() => import('../pages/settings/Stocks'));
const Measurement = lazy(() => import('../pages/settings/Measurement'));
const Category = lazy(() => import('../pages/settings/Category'));
const ItemProperty = lazy(() => import('../pages/settings/ItemProperty'));
const SettingsLayout = lazy(() => import('../pages/settings/SettingsLayout'));

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Patients = lazy(() => import('../pages/Patients'));
const CreateBill = lazy(() => import('../pages/CreateBill'));
const StockList = lazy(() => import('../pages/StockList'));
const AddStock = lazy(() => import('../pages/AddStock'));
const BillingHistory = lazy(() => import('../pages/BillingHistory'));
const ViewPatient = lazy(() => import('../pages/ViewPatient'));
// const Settings = lazy(() => import('../pages/settings/Sidebar/Sidebar'));

export default function PharmacyRoutes() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route path="/patients">
        <Route index element={<Patients />} />
        <Route path="viewpatient/:id" element={<ViewPatient />} />
      </Route>

      <Route path="/createbill" element={<CreateBill />} />
      <Route path="/bill/createbill" element={<CreateBill />} />

      <Route path="/stocklist">
        <Route index element={<StockList />} />
        <Route path="addstock" element={<AddStock />} />
      </Route>
      <Route path="/addstock" element={<AddStock />} />

      <Route path="/billinghistory" element={<BillingHistory />} />

      <Route path="settings" element={<SettingsLayout />}>
        <Route index element={<Navigate to="stocks" replace />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="measurements" element={<Measurement />} />
        <Route path="categories" element={<Category />} />
        <Route path="properties" element={<ItemProperty />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
}
