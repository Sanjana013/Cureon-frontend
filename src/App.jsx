import "./index.css";
import AuthLayout from "./layouts/authLayout";
import GuestLayout from "./layouts/guestLayout";
import { useAuth } from "./modules/Auth/context/authContext";
import AuthRouter from "./router/AuthRouter";
import GuestRouter from "./router/GuestRouter";

export default function App() {
  const { token } = useAuth();
  return (
    <>
      {token ? (
        <AuthLayout>
          <AuthRouter />
        </AuthLayout>
      ) : (
        <GuestLayout>
          <GuestRouter />
        </GuestLayout>
      )}
    </>
  );
}
