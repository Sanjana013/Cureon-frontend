import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animabot from "@/assets/static/animabot.json";

export default function DoctorPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Left: Form Section */}
      <div className="w-1/2 flex items-center justify-center p-10">
        <Card className="auth-card w-full max-w-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-2xl border border-blue-100 dark:border-gray-700 transition-colors duration-300">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2 text-[#293379] dark:text-blue-300">
              Doctor Registration{" "}
              <i className="fa-solid fa-user-doctor text-[#293379] dark:text-blue-300"></i>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                />
              </div>

              <div>
                <Label
                  htmlFor="specialization"
                  className="mb-1 text-[#293379] dark:text-blue-200"
                >
                  Specialization
                </Label>
                <Input
                  id="specialization"
                  type="text"
                  placeholder="e.g. dermatology"
                  value={form.specialization}
                  onChange={(e) =>
                    setForm({ ...form, specialization: e.target.value })
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
                  className="bg-white/80 dark:bg-gray-700/80 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                />
              </div>

              <Button
                className="w-full hover:bg-blue-700 dark:hover:bg-blue-600 text-white transition-colors duration-300"
                style={{ backgroundColor: "#293379" }}
              >
                Register as a Doctor
              </Button>

              <p className="text-center text-sm mt-2 text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Login here
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
    </div>
  );
}
