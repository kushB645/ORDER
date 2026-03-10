import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = {
      firstName,
      lastName,
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Login</h2>

        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

      </div>

    </div>
  );
};

export default Login;