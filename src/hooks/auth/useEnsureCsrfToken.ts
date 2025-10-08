import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export function useEnsureCsrfToken() {
    useEffect(() => {
        if (!Cookies.get('XSRF-TOKEN')) {
            axios.get("/api/csrf", { withCredentials: true });
        }
    }, []);
}
