"use client";

import React, { useState, useEffect } from "react";
import i18next from "i18next";

const I18nReady = ({ children }) => {
    const [ready, setReady] = useState(i18next.isInitialized);

    useEffect(() => {
        if (!i18next.isInitialized) {
            const handler = () => setReady(true);
            i18next.on("initialized", handler);
            return () => i18next.off("initialized", handler);
        }
    }, []);

    if (!ready) return null;

    return children;
};

export default I18nReady;
