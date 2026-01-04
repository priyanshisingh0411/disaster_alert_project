import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const AdminDataSources = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation isLoggedIn={true} />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar active="admin-data" />
      <div style={{ flex: 1, padding: "2rem", background: "#f9fafb" }}>
        <div
          style={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              Data Sources
            </h1>
            <p style={{ color: "#6b7280" }}>
              Manage API endpoints and data feeds
            </p>
          </div>
          <button
            style={{
              padding: "0.75rem 1.5rem",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            + Add Data Source
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            {
              name: "USGS Earthquake API",
              url: "https://earthquake.usgs.gov/fdsnws/event/1/",
              status: "Active",
              lastSync: "2 min ago",
            },
            {
              name: "NOAA Weather API",
              url: "https://api.weather.gov/",
              status: "Active",
              lastSync: "5 min ago",
            },
            {
              name: "NASA FIRMS",
              url: "https://firms.modaps.eosdis.nasa.gov/",
              status: "Active",
              lastSync: "10 min ago",
            },
            {
              name: "WHO Emergency Feed",
              url: "https://www.who.int/feeds/emergency",
              status: "Warning",
              lastSync: "1 hour ago",
            },
          ].map((source, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "1.5rem",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {source.name}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {source.url}
                </p>
                <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
                  Last synced: {source.lastSync}
                </p>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <span
                  style={{
                    padding: "0.375rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    background:
                      source.status === "Active" ? "#dcfce7" : "#fef3c7",
                    color: source.status === "Active" ? "#166534" : "#92400e",
                  }}
                >
                  {source.status}
                </span>
                <button
                  style={{
                    padding: "0.5rem 1rem",
                    background: "#f3f4f6",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AdminDataSources;
