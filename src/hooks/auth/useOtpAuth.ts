import { useState, useEffect } from "react";
import { requestOtpAPI, verifyOtpAPI } from "../../services/auth.service";
import { useAuthStore } from "../../store/authStore";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const COOKIE_OPTIONS = {
  expires: 7,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
};

export const useOtpAuth = () => {
  const [phone, setPhoneState] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setToken, setUser } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("auth_phone");
      if (saved) setPhoneState(saved);
    }
  }, []);

  const setPhone = (val: string) => {
    setPhoneState(val);
    if (typeof window !== "undefined") localStorage.setItem("auth_phone", val);
  };

  const requestOtp = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await requestOtpAPI(phone);
    } catch (e) {
      setError("Không thể gửi OTP. Vui lòng thử lại sau.");
      console.error("OTP error:", e);
    }
    setIsLoading(false);
  };

  const verifyOtp = async () => {
    setError(null);
    setIsVerifying(true);
    try {
      const { data } = await verifyOtpAPI(phone, otp);
      if (data?.data?.token) {
        setToken(data.data.token);
        Cookies.set("auth-token", data.data.token, COOKIE_OPTIONS);
        data.data.user && setUser(data.data.user);
        if (typeof window !== "undefined") localStorage.removeItem("auth_phone");
        router.push("/");
        return;
      }
    } catch (e) {
      setError("Xác thực OTP thất bại. Vui lòng thử lại.");
      console.error("Verify error:", e);
    }
    setIsVerifying(false);
  };

  return { phone, setPhone, otp, setOtp, isLoading, isVerifying, error, requestOtp, verifyOtp };
};
