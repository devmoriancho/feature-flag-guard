import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import MaintenanceView from "../features/maintenance/MaintenanceView";
import MainDashboardView from "../features/dashboard/MainDashboardView";
import PayoutsView from "../features/payouts/PayoutsView";
import JobsView from "../features/jobs/JobsView";

const AppRouter = () => {
  const isMaintenanceMode =
    import.meta.env.VITE_PORTAL_MAINTENANCE_MODE === "true";
  return (
    <BrowserRouter>
      <Routes path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<MainDashboardView />} />
        <Route path="payouts" element={<PayoutsView />} />
        <Route
          path="jobs"
          element={isMaintenanceMode ? <MaintenanceView /> : <JobsView />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
