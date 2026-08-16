import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import LoginView from "./features/auth/LoginView";
import SignupView from "./features/auth/SignupView";

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [showSignup, setShowSignup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.removeItem("user");
      setUser(null);
      return;
    }

    fetch("http://localhost:5000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("Session invalid");
        }

        const data = await res.json();

        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user);
        } else {
          handleLogout();
        }
      })
      .catch(() => {
        handleLogout();
      });
  }, []);

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
      <AppRouter user={user} onLogout={handleLogout} />
    </main>
  );
};

export default App;
