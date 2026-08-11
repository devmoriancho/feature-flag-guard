const App = () => {
  const isMaintainance =
    import.meta.data.env.VITE_PORTAL_MAINTENANCE_MODE === "true";
  return (
    <main>
      <h1>APP</h1>
    </main>
  );
};

export default App;
