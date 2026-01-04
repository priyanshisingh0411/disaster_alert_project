"use client";
import React, { useEffect, useState } from "react";
import {
  Users,
  Map,
  Bell,
  Settings,
  Info,
  Database,
  FileText,
} from "lucide-react";
import { useRouter } from "next/navigation";

const Sidebar = ({ active }) => {
  const router = useRouter();

  const [role, setRole] = useState(() => {
    try {
      return localStorage.getItem("userRole") || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "userRole") setRole(e.newValue || null);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div
      style={{
        width: "250px",
        background: "#f9fafb",
        borderRight: "2px solid #e5e7eb",
        padding: "2rem 0",
        minHeight: "100vh",
      }}
    >
      {(role === "user"
        ? [
            { id: "dashboard", label: "Dashboard", icon: <Map size={20} /> },
            { id: "alerts", label: "Alerts", icon: <Bell size={20} /> },
            { id: "settings", label: "Settings", icon: <Settings size={20} /> },
            { id: "about", label: "About", icon: <Info size={20} /> },
          ]
        : [
            {
              id: "admin-overview",
              label: "Overview",
              icon: <Map size={20} />,
            },
            {
              id: "admin-users",
              label: "Manage Users",
              icon: <Users size={20} />,
            },
            {
              id: "admin-data",
              label: "Data Sources",
              icon: <Database size={20} />,
            },
            {
              id: "admin-logs",
              label: "System Logs",
              icon: <FileText size={20} />,
            },
          ]
      ).map((item) => (
        <div
          key={item.id}
          onClick={() => setCurrentPage(item.id)}
          style={{
            padding: "1rem 2rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            cursor: "pointer",
            background: active === item.id ? "#e0f2fe" : "transparent",
            borderLeft:
              active === item.id
                ? "4px solid #3b82f6"
                : "4px solid transparent",
            color: active === item.id ? "#0369a1" : "#4b5563",
            transition: "all 0.2s",
          }}
        >
          {item.icon}
          <span style={{ fontWeight: active === item.id ? "600" : "400" }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
