import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { Users, Bell, Database, AlertCircle } from "lucide-react";

const AdminOverview = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation isLoggedIn={true} />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar active="admin-overview" />
      <div style={{ flex: 1, padding: "2rem", background: "#f9fafb" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: "rgb(59 130 246 / 87%)",
            }}
          >
            Admin Overview
          </h1>
          <p style={{ color: "#6b7280" }}>
            System statistics and management dashboard
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            marginBottom: "2rem",
            color: "#111827",
          }}
        >
          {[
            {
              label: "Total Users",
              value: "1,247",
              icon: <Users size={24} />,
            },
            { label: "Active Alerts", value: "12", icon: <Bell size={24} /> },
            {
              label: "Data Sources",
              value: "8",
              icon: <Database size={24} />,
            },
            {
              label: "System Uptime",
              value: "99.9%",
              icon: <AlertCircle size={24} />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ color: "#3b82f6", marginBottom: "0.75rem" }}>
                {stat.icon}
              </div>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </p>
              <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            color: "#111827",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Recent User Activity
            </h2>
            <div
              style={{
                height: "200px",
                background: "#f9fafb",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
              }}
            >
              Activity Graph Placeholder
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              color: "#111827",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
              }}
            >
              Disaster Distribution
            </h2>
            <div
              style={{
                height: "200px",
                background: "#f9fafb",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
              }}
            >
              Pie Chart Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminOverview;
