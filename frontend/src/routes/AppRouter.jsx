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

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const PublicRoute = ({ user, children, redirectTo = "/dashboard" }) => {
  if (user) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

const AppRouter = ({ user, onAuthSuccess, onLogout }) => {
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
        <Route
          path="/signup"
          element={
            <PublicRoute user={user}>
              <SignupView onSignupSuccess={onAuthSuccess} />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute user={user}>
              <DashboardLayout onLogout={onLogout} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<MainDashboardView />} />
          <Route path="payouts" element={<PayoutsView />} />
          <Route path="profiles" element={<ProfileView />} />
          <Route
            path="jobs"
            element={isMaintenanceMode ? <MaintenanceView /> : <JobsView />}
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute user={user}>
              <LoginView onLoginSuccess={onAuthSuccess} />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
