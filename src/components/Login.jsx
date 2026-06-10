import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      setError("");
      setLoading(true);

      const res = await fetch("https://order-de0s.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.message !== "Login success") {
        setError(data.message);
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
      window.location.reload();
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.open("https://accounts.google.com/signin", "_blank");
  };

  const handleFacebookLogin = () => {
    window.open("https://www.facebook.com/login", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] flex flex-col items-center justify-center px-4 py-20">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#ff8400] text-white text-center py-10 px-6">
          <h1 className="text-4xl font-bold mb-2">
            Welcome Back!
          </h1>

          <p className="text-lg">
            Sign in to continue ordering delicious food
          </p>
        </div>

        {/* Body */}
        <div className="p-8">

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
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-[#ff8400]"
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
              className=" w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 outline-none focus:border-[#ff8400]"
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
            <p className="text-red-500 mb-4 text-sm">
              {error}
            </p>
          )}

          {/* Remember */}
          <div className="flex justify-between items-center mb-6 text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="text-[#ff8400] cursor-pointer">
              Forgot Password?
            </span>

          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className=" w-full bg-[#ff8400] text-white py-3 rounded-xl font-semibold hover:bg-[#e67600] transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="px-4 text-gray-500">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleLogin}
            className=" w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 mb-4 hover:bg-gray-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              alt="google"
              className="w-6 h-6"
            />

            Continue with Google
          </button>

          {/* Facebook */}
          <button
            onClick={handleFacebookLogin}
            className=" w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="facebook"
              className="w-6 h-6"
            />

            Continue with Facebook
          </button>

          {/* Signup */}
          <p className="text-center mt-6">
            Don't have an account?

            <span
              className="text-[#ff8400] font-semibold cursor-pointer ml-2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>

      {/* Terms */}
      <p className="text-center text-gray-600 mt-6 px-4">
        By continuing, you agree to our
        <span className="font-semibold"> Terms of Service </span>
        and
        <span className="font-semibold"> Privacy Policy</span>
      </p>

    </div>
  );
};

export default Login;