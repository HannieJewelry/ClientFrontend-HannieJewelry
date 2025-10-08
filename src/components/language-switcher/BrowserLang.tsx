import React, { useEffect, useState } from "react";
import i18next from "i18next";

const BrowserLang = () => {
    const [browserLang, setBrowserLang] = useState("");
    const [i18nLang, setI18nLang] = useState(i18next.language);

    useEffect(() => {
        if (typeof window !== "undefined") setBrowserLang(navigator.language);
        const handler = (lng: string) => setI18nLang(lng);
        i18next.on("languageChanged", handler);
        return () => i18next.off("languageChanged", handler);
    }, []);

    return (
        <div>
            Ngôn ngữ hệ điều hành: <b>{browserLang}</b>
            <br />
            Mã ngôn ngữ hệ điều hành: <b>{browserLang?.split('-')[0]}</b>
            <br />
            Ngôn ngữ i18next đã chọn: <b>{i18nLang}</b>
        </div>
    );
};

export default BrowserLang;
