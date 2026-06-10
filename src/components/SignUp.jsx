import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain 8+ characters, uppercase, lowercase, number and special symbol"
      );
      return;
    }

    try {
      setError("");
      setLoading(true);

      const res = await fetch("https://order-de0s.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      if (data.message === "User already exists") {
        setError("User already exists");
        return;
      }

      if (data.message === "Signup successful") {
        alert("Account created successfully");
        navigate("/login");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex flex-col items-center justify-center px-4 py-20">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#ff8400] text-white text-center py-10 px-6">
          <h1 className="text-4xl font-bold mb-2">
            Create Account
          </h1>

          <p className="text-lg">
            Join us and start ordering delicious food
          </p>
        </div>

        {/* Body */}
        <div className="p-8">

          {/* Name */}
          <label className="block font-medium mb-2">
            Full Name
          </label>

          <div className="relative mb-5">
            <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#ff8400]"
            />
          </div>

          {/* Email */}
          <label className="block font-medium mb-2">
            Email Address
          </label>

          <div className="relative mb-5">
            <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#ff8400]"
            />
          </div>

          {/* Password */}
          <label className="block font-medium mb-2">
            Password
          </label>

          <div className="relative mb-4">
            <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 outline-none focus:border-[#ff8400]"
            />

            <i
              className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 ri-${
                showPassword ? "eye-off-line" : "eye-line"
              }`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className=" w-full bg-[#ff8400] text-white py-3 rounded-xl font-semibold hover:bg-[#e67600] transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {/* Login Link */}
          <p className="text-center mt-6">
            Already have an account?

            <span
              onClick={() => navigate("/login")}
              className=" text-[#ff8400] font-semibold cursor-pointer ml-2"
            >
              Sign In
            </span>
          </p>

        </div>
      </div>

      <p className="text-center text-gray-600 mt-6 px-4">
              By continuing, you agree to our
              <span className="font-semibold"> Terms of Service </span>
              and
              <span className="font-semibold"> Privacy Policy</span>
            </p>

    </div>
  );
};

export default SignUp;