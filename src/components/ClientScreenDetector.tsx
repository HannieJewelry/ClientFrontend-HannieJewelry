"use client";

import { useEffect } from "react";

export default function ClientViewportDetector() {
    useEffect(() => {
        const width = window.innerWidth;

        let screen = "desktop";
        if (width < 500) screen = "mobile";
        else if (width < 768) screen = "tablet";

        document.cookie = `viewport=${screen}; path=/`;
        console.log("[viewport] Detected:", screen);
    }, []);

    return null;
}
