"use client";
import React, { useState } from "react";
import Header from "./Header";
import Expenses from "./expenses";
import { AdminRightsContext } from "./AdminContext";
import "./globals.css";

export default function Page() {
  const [isAdminMode, setAdminMode] = useState(false);

  const handleToggle = () => {
    setAdminMode(!isAdminMode);
  };

  return (
    <AdminRightsContext.Provider value={isAdminMode}>
      <Header onToggleAdminMode={handleToggle} isAdminMode={isAdminMode} />
      <Expenses />
    </AdminRightsContext.Provider>
  );
}
