import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const SettingsPage = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation isLoggedIn={true} />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar active="settings" />
      <div style={{ flex: 1, padding: "2rem", background: "#f9fafb" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Settings
          </h1>
          <p style={{ color: "#6b7280" }}>
            Manage your account and preferences
          </p>
        </div>

        {/* Profile Settings */}
        <div
          style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
            }}
          >
            Profile Settings
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                New Password
              </label>
              <input
                type="password"
                placeholder="Leave blank to keep current"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Alert Preferences */}
        <div
          style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
            }}
          >
            Alert Preferences
          </h2>

          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              Disaster Types to Monitor
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {[
                "Earthquakes",
                "Floods",
                "Hurricanes",
                "Wildfires",
                "Tornadoes",
                "Tsunamis",
              ].map((type, i) => (
                <label
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    defaultChecked={i < 4}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              Severity Threshold
            </h3>
            <select
              style={{
                padding: "0.75rem",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              <option>All severities</option>
              <option>Medium and High only</option>
              <option>High only</option>
            </select>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              Notification Methods
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Browser notifications</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ width: "20px", height: "20px" }}
                />
                <span>Email notifications</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  style={{ width: "20px", height: "20px" }}
                />
                <span>SMS notifications (Premium feature)</span>
              </label>
            </div>
          </div>
        </div>

        <button
          style={{
            padding: "1rem 2rem",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

export default SettingsPage;
