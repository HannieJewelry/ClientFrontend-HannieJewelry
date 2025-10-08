"use client";

import { useEffect, useState } from "react";
import i18next from "../i18n";

export default function AppWrapper({ children }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (i18next.isInitialized) setReady(true);
        else i18next.on("initialized", () => setReady(true));
        return () => i18next.off("initialized", () => setReady(true));
    }, []);

    if (!ready) return null;

    return children;
}
