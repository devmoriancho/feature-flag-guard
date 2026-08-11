import MaintenanceView from "../features/maintenance/MaintenanceView";

const AppRouter = () => {
  const isMaintenanceMode =
    import.meta.env.VITE_PORTAL_MAINTENANCE_MODE === "true";
  return (
    <section>
      {isMaintenanceMode ? (
        <MaintenanceView />
      ) : (
        <div>
          <h1>🚀 Welcome Back!</h1>
          <p>Loading your App Dashboard...</p>
        </div>
      )}
    </section>
  );
};

export default AppRouter;
