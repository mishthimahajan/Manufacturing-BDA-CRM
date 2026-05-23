import API from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.msg ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = (
    credentialResponse
  ) => {
    try {
      const user = jwtDecode(
        credentialResponse.credential
      );

      localStorage.setItem(
        "googleUser",
        JSON.stringify(user)
      );

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-900 to-pink-800 flex">

      {/* Left Section */}

      <div className="hidden lg:flex w-1/2 items-center justify-center p-10">

        <div>

          <h1 className="text-6xl font-bold text-white mb-6">
            BDA CRM
          </h1>

          <p className="text-purple-200 text-xl leading-9">
            Manufacturing Lead Management,
            Sales Tracking, Team Workflow
            and Client Pipeline System.
          </p>

          <div className="mt-10 bg-white/10 p-6 rounded-3xl backdrop-blur-md border border-white/20">

            <h2 className="text-white text-2xl font-semibold">
              Features
            </h2>

            <ul className="text-purple-200 mt-4 space-y-2">

              <li>
                ✓ Lead Pipeline Tracking
              </li>

              <li>
                ✓ Team Performance Dashboard
              </li>

              <li>
                ✓ Task Management
              </li>

              <li>
                ✓ Manufacturing CRM
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Login Card */}

      <div className="flex-1 flex justify-center items-center p-6">

        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-10">

          <h2 className="text-4xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="text-purple-200 mt-2 mb-8">
            Login to continue
          </p>

          <form
            onSubmit={submit}
            className="space-y-5"
          >

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-purple-200 outline-none border border-white/20"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-purple-200 outline-none border border-white/20"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 text-white font-bold hover:scale-105 transition duration-300"
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </button>

          </form>

          <div className="my-6 text-center text-white">
            OR
          </div>
          <p className="text-center text-purple-200 mt-6">

Don't have account?

<a

href="/register"

className="text-pink-300 ml-2"

>

Register

</a>

</p>

          <div className="flex justify-center">

            <GoogleLogin
              onSuccess={
                handleGoogleLogin
              }
              onError={() => {
                console.log(
                  "Google login failed"
                );
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}