import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const AdminLogs = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation isLoggedIn={true} />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar active="admin-logs" />
      <div style={{ flex: 1, padding: "2rem", background: "#f9fafb" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            System Logs
          </h1>
          <p style={{ color: "#6b7280" }}>
            View system activities and error logs
          </p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "1.5rem",
          }}
        >
          <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
            <select
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            >
              <option>All Types</option>
              <option>Info</option>
              <option>Warning</option>
              <option>Error</option>
            </select>
            <input
              type="date"
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              fontFamily: "monospace",
              fontSize: "0.875rem",
            }}
          >
            {[
              {
                time: "10:45:23",
                type: "INFO",
                message: "Data sync completed successfully from USGS API",
              },
              {
                time: "10:42:15",
                type: "INFO",
                message: "User john@example.com logged in",
              },
              {
                time: "10:38:07",
                type: "WARNING",
                message: "High API request rate detected from 192.168.1.1",
              },
              {
                time: "10:35:44",
                type: "INFO",
                message: "New alert created: Earthquake in California",
              },
              {
                time: "10:30:12",
                type: "ERROR",
                message: "Failed to fetch data from WHO Emergency Feed",
              },
              {
                time: "10:25:33",
                type: "INFO",
                message: "Email notification sent to 234 users",
              },
              {
                time: "10:20:18",
                type: "INFO",
                message: "User jane@example.com updated alert preferences",
              },
              {
                time: "10:15:09",
                type: "WARNING",
                message: "Database query execution time exceeded threshold",
              },
            ].map((log, i) => (
              <div
                key={i}
                style={{
                  padding: "0.75rem",
                  background: "#f9fafb",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "1rem",
                  borderLeft: `3px solid ${
                    log.type === "ERROR"
                      ? "#dc2626"
                      : log.type === "WARNING"
                      ? "#f59e0b"
                      : "#3b82f6"
                  }`,
                }}
              >
                <span style={{ color: "#6b7280", minWidth: "80px" }}>
                  {log.time}
                </span>
                <span
                  style={{
                    minWidth: "80px",
                    fontWeight: "600",
                    color:
                      log.type === "ERROR"
                        ? "#dc2626"
                        : log.type === "WARNING"
                        ? "#f59e0b"
                        : "#3b82f6",
                  }}
                >
                  {log.type}
                </span>
                <span style={{ color: "#4b5563" }}>{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminLogs;
