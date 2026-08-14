import { useState } from "react";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(`🚀 Success: ${data.message}`);
        setEmail("");
        setPassword("");
      } else {
        setMessage(`❌ Error: ${data.message || "Login credentials failed"}`);
      }
    } catch (error) {
      setMessage(
        "❌ Network Error: Could not connect to the authentication server.",
      );
    }
  };
  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Welcome Back! 👤</h2>
      <p style={{ color: "#666" }}>
        Sign in to verify your profile and unlock the layout
      </p>
      {message && (
        <div style={{ margin: "1rem 0", fontWeight: "bold" }}>{message}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block" }}>Email Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "#10b981",
            color: "white",
            padding: "0.75rem",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Sign In to Dashboard
        </button>
      </form>
    </div>
  );
};

export default LoginView;
