import React from "react";

const AlertsPage = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation isLoggedIn={true} />
    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar active="alerts" />
      <div style={{ flex: 1, padding: "2rem", background: "#f9fafb" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Alert Management
          </h1>
          <p style={{ color: "#6b7280" }}>
            View and manage disaster alerts and notifications
          </p>
        </div>

        {/* Filters */}
        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <select
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              flex: 1,
              minWidth: "200px",
            }}
          >
            <option>All Disaster Types</option>
            <option>Earthquake</option>
            <option>Flood</option>
            <option>Hurricane</option>
            <option>Wildfire</option>
          </select>
          <select
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              flex: 1,
              minWidth: "200px",
            }}
          >
            <option>All Severities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              flex: 1,
              minWidth: "200px",
            }}
          >
            <option>All Regions</option>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Australia</option>
          </select>
        </div>

        {/* Notification Settings */}
        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Notification Settings
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
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
              <span>Enable browser notifications</span>
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
              <span>Enable email alerts</span>
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
              <span>Enable SMS alerts (Premium)</span>
            </label>
          </div>
        </div>

        {/* Active Alerts */}
        <div
          style={{ background: "#fff", borderRadius: "8px", padding: "1.5rem" }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            Active Alerts
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {[
              {
                type: "Earthquake",
                location: "California, USA",
                severity: "High",
                time: "2 hours ago",
                status: "Active",
                desc: "Magnitude 6.8 earthquake detected 15km east of Los Angeles",
              },
              {
                type: "Flood",
                location: "Mumbai, India",
                severity: "Medium",
                time: "5 hours ago",
                status: "Active",
                desc: "Heavy rainfall causing urban flooding in multiple districts",
              },
              {
                type: "Hurricane",
                location: "Florida, USA",
                severity: "High",
                time: "8 hours ago",
                status: "Monitoring",
                desc: "Category 3 hurricane approaching southeastern coast",
              },
            ].map((alert, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  borderLeft: `4px solid ${
                    alert.severity === "High" ? "#dc2626" : "#f59e0b"
                  }`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <AlertCircle
                      size={24}
                      color={alert.severity === "High" ? "#dc2626" : "#f59e0b"}
                    />
                    <div>
                      <h3 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
                        {alert.type}
                      </h3>
                      <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                        {alert.location}
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        background:
                          alert.severity === "High" ? "#fee2e2" : "#fef3c7",
                        color:
                          alert.severity === "High" ? "#991b1b" : "#92400e",
                      }}
                    >
                      {alert.severity}
                    </span>
                    <span
                      style={{
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        fontSize: "0.875rem",
                        background: "#dbeafe",
                        color: "#1e40af",
                      }}
                    >
                      {alert.status}
                    </span>
                  </div>
                </div>
                <p style={{ color: "#4b5563", marginBottom: "0.75rem" }}>
                  {alert.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    <Clock
                      size={14}
                      style={{ display: "inline", marginRight: "0.25rem" }}
                    />
                    {alert.time}
                  </span>
                  <button
                    onClick={() => setShowNotification(true)}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "#3b82f6",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AlertsPage;
