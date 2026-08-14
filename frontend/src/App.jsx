import { useState } from "react";
import AppRouter from "./routes/AppRouter";
import LoginView from "./features/auth/LoginView";
import SignupView from "./features/auth/SignupView";

const App = () => {
  const isMaintainance =
    import.meta.env.VITE_PORTAL_MAINTENANCE_MODE === "true";

  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  if (!user) {
    return (
      <div
        style={{
          backgroundColor: "#f3f4f6",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {showSignup ? <SignupView /> : <LoginView onLoginSuccess={setUser} />}

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            onClick={() => setShowSignup(!showSignup)}
            style={{
              background: "none",
              border: "none",
              color: "#0070f3",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {showSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <main>
      <AppRouter user={user} onLogout={() => setUser(null)} />
    </main>
  );
};

export default App;
