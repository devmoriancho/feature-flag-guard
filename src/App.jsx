import AppRouter from "./routes/AppRouter";
import "./index.css";
const App = () => {
  const isMaintainance =
    import.meta.env.VITE_PORTAL_MAINTENANCE_MODE === "true";
  return (
    <main>
      <AppRouter />
    </main>
  );
};

export default App;
