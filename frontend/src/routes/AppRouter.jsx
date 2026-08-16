import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import MaintenanceView from "../features/maintenance/MaintenanceView";
import MainDashboardView from "../features/dashboard/MainDashboardView";
import PayoutsView from "../features/payouts/PayoutsView";
import JobsView from "../features/jobs/JobsView";
import ProfileView from "../features/profile/profileView";
import SignupView from "../features/auth/SignupView";
import LoginView from "../features/auth/LoginView";

const AppRouter = ({ onLogout }) => {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/app-status")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setIsMaintenanceMode(data.isMaintenance);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to sync with database backend:", err);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Connecting to system networks...
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupView />} />
        <Route path="/" element={<DashboardLayout onLogout={onLogout} />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<MainDashboardView />} />
          <Route path="payouts" element={<PayoutsView />} />
          <Route path="profiles" element={<ProfileView />} />
          <Route
            path="jobs"
            element={isMaintenanceMode ? <MaintenanceView /> : <JobsView />}
          />
        </Route>
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
