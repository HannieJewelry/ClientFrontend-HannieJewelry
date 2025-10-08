"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { resources } from "./resource";

// Chỉ khởi tạo 1 lần
if (!i18next.isInitialized) {
    i18next
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            resources,
            fallbackLng: "vi",
            interpolation: { escapeValue: false },
            detection: {
                order: ["localStorage", "cookie", "navigator"],
                caches: ["localStorage", "cookie"],
            },
        });
}

export default i18next;

// Đổi ngôn ngữ
export const changeLanguage = (lng: string) => i18next.changeLanguage(lng);

// Lấy ngôn ngữ hiện tại
export const getCurrentLanguage = () => i18next.language;
