import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import LoginView from "./features/auth/LoginView";
import SignupView from "./features/auth/SignupView";

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [authReady, setAuthReady] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [notice, setNotice] = useState("");

  const handleAuthSuccess = (userData) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } else {
      setUser(null);
    }

    setNotice("");
  };

  const handleLogout = async (reason = "") => {
    try {
      await fetch("http://localhost:5000/api/users/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // Client-side cleanup still runs even if network logout fails.
    }

    localStorage.removeItem("user");
    setUser(null);
    if (reason) {
      setNotice(reason);
    }
  };

  useEffect(() => {
    const hadSavedUser = Boolean(localStorage.getItem("user"));

    fetch("http://localhost:5000/api/users/me", {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Session invalid");
        }

        const data = await res.json();

        if (data.user) {
          handleAuthSuccess(data.user);
        } else {
          void handleLogout(
            hadSavedUser ? "Your session expired. Please sign in again." : "",
          );
        }
      })
      .catch(() => {
        void handleLogout(
          hadSavedUser ? "Your session expired. Please sign in again." : "",
        );
      })
      .finally(() => {
        setAuthReady(true);
      });
  }, []);

  if (!authReady) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f4f6",
          color: "#374151",
          fontWeight: 600,
        }}
      >
        Loading your session...
      </div>
    );
  }

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
        {notice && (
          <div
            style={{
              marginBottom: "1rem",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              background: "#fee2e2",
              color: "#991b1b",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {notice}
          </div>
        )}

        {showSignup ? (
          <SignupView onSignupSuccess={handleAuthSuccess} />
        ) : (
          <LoginView onLoginSuccess={handleAuthSuccess} />
        )}

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
      <AppRouter
        user={user}
        onAuthSuccess={handleAuthSuccess}
        onLogout={handleLogout}
      />
    </main>
  );
};

export default App;
