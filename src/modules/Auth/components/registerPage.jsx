import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Lottie from "lottie-react";
import animabot from "@/assets/static/animabot.json";
import axios from "axios";
import { useAuth } from "../context/authContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const { setToken, setUser } = useAuth();

  //otp states
  const [otp, setOtp] = useState("");
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:5000/auth/register", form)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.reponse);
  //     });
  // };

  //newhandlesubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        form
      );
      console.log(response.data);

      if (response.data.message) {
        setIsOtpDialogOpen(true);
      }
    } catch (err) {
      console.log(err.response);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/verify-mail",
        {
          email: form.email,
          otpInp: otp,
        }
      );

      console.log(response.data);

      if (response.data.message === "User registration Successful") {
        setIsOtpDialogOpen(false);
        setToken(response.data.data.access_token);
        navigate("/");
      }
    } catch (err) {
      console.log(err.response);
      setError(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const getMaskedEmail = (email) => {
    if (!email) return "";
    const atIndex = email.indexOf("@");
    if (atIndex === -1) return email;

    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex);

    // Show last 4 characters of username, mask the rest
    if (username.length <= 4) {
      return "*".repeat(username.length) + domain;
    }

    const maskedUsername = "*".repeat(username.length - 4) + username.slice(-4);
    return maskedUsername + domain;
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Left: Form Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <Card className="auth-card w-full max-w-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-2xl border border-blue-100 dark:border-gray-700 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2 text-[#293379] dark:text-blue-300">
              Start Your Journey Today{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* error               */}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                  {error}
                </div>
              )}
              <div>
                <Label
                  htmlFor="name"
                  className="mb-1 text-[#293379] dark:text-blue-200"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  required
                  className="bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="mb-1 text-[#293379] dark:text-blue-200"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                />
              </div>

              <div>
                <Label
                  htmlFor="password"
                  className="mb-1 text-[#293379] dark:text-blue-200"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                  minLength={6}
                  className="bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Must be at least 6 characters
                </p>
              </div>

              {/* <Button
                className="w-full hover:bg-blue-700 dark:hover:bg-blue-600 text-white transition-colors duration-300"
                style={{ backgroundColor: "#293379" }}
              >
                Register
              </Button> */}

              <Button
                type="submit"
                disabled={loading}
                className="w-full hover:bg-blue-700 dark:hover:bg-blue-600 text-white transition-colors duration-300 disabled:opacity-50"
                style={{ backgroundColor: "#293379" }}
              >
                {loading ? "Registering..." : "Register"}
              </Button>

              <p className="text-center text-sm mt-2 text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Sign In
                </Link>
              </p>

              <p className="text-center text-sm mt-2 text-gray-700 dark:text-gray-300">
                Are you a doctor?{" "}
                <Link
                  to="/doctor-register"
                  className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right: Animation Section */}
      <div className="w-1/2 flex items-center justify-center">
        <Lottie animationData={animabot} loop={true} className="max-w-md" />
      </div>

      {/* OTP Verification Dialog */}
      <Dialog open={isOtpDialogOpen} onOpenChange={setIsOtpDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl rounded-2xl">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-center text-2xl font-bold text-[#293379] dark:text-blue-300">
              Verify Your Email
            </DialogTitle>
            <DialogDescription className="text-center text-base text-gray-600 dark:text-gray-400">
              We've sent a 6-digit verification code to{" "}
              <span className="font-semibold text-[#293379] dark:text-blue-300 block mt-1">
                {getMaskedEmail(form.email)}
              </span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-2">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="otp"
                  className="text-[#293379] dark:text-blue-200 text-base font-semibold"
                >
                  Enter Verification Code
                </Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={handleOtpChange}
                  maxLength={6}
                  className="text-center text-2xl font-bold tracking-[0.5em] h-14 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 focus:border-[#293379] focus:ring-2 focus:ring-[#293379]/20 rounded-xl"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Check your email for the 6-digit verification code
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOtpDialogOpen(false)}
                className="flex-1 h-12 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-medium"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleVerifyOtp}
                disabled={loading || otp.length !== 6}
                className="flex-1 h-12 text-white font-semibold transition-all duration-300 hover:bg-[#3a4a9c] disabled:opacity-50 rounded-xl shadow-lg"
                style={{ backgroundColor: "#293379" }}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </div>
                ) : (
                  "Verify OTP"
                )}
              </Button>
            </div>

            <div className="text-center pt-4 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                className="text-[#293379] dark:text-blue-300 hover:text-[#3a4a9c] dark:hover:text-blue-200 font-medium text-sm transition-colors duration-200"
                onClick={() => {
                  // Optional: Add resend OTP functionality
                  console.log("Resend OTP");
                }}
              >
                Didn't receive code? Resend OTP
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
