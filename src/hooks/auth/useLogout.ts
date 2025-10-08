import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/authStore";

export const useLogout = () => {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return { logout: handleLogout };
}; 