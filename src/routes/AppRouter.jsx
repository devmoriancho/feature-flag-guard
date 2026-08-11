const AppRouter = () => {
  const isMaintenanceMode =
    import.meta.env.VITE_PORTAL_MAINTENANCE_MODE === "true";
  return (
    <section>
      {isMaintenanceMode ? (
        <div>
          <h1>⚠️ System Under Maintenance</h1>
          <p>We will be back shortly!</p>
        </div>
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
