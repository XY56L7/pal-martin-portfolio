import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
      <button
        onClick={() => changeLanguage('en')}
        style={{
          marginRight: "10px",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          background: "#0070f3",
          color: "#fff",
        }}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('hu')}
        style={{
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          background: "#0070f3",
          color: "#fff",
        }}
      >
        HU
      </button>
    </div>
  );
}
