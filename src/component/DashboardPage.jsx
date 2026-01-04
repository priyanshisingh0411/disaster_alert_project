"use client";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { Map, Bell, AlertTriangle, Clock, MapPin } from "lucide-react";
import NotificationModal from "./NotificationModal";
import DisasterMap from "./DisasterMap";

const DashboardPage = () => {
  const [alerts, setAlerts] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const location = { lat: 20.5937, lon: 78.9629 };

  // useEffect(() => {
  //   fetch(
  //     `http://localhost:5000/api/weather/alerts?lat=${location.lat}&lon=${location.lon}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAlerts(data.alerts || []);
  //     })
  //     .catch(() => {});
  // }, []);

  // useEffect(() => {
  //
  //   const mockAlerts = [
  //     {
  //       event: "Flood Warning",
  //       sender_name: "IMD",
  //       description: "Heavy rainfall may cause flooding in low-lying areas.",
  //       lat: 19.076,
  //       lon: 72.8777,
  //       severity: "severe",
  //       location: "Mumbai",
  //     },
  //     {
  //       event: "Heatwave Alert",
  //       sender_name: "IMD",
  //       description: "Extreme temperatures expected. Avoid outdoor activities.",
  //       lat: 18.5204,
  //       lon: 73.8567,
  //       severity: "moderate",
  //       location: "Pune",
  //     },
  //     {
  //       event: "Cyclone Watch",
  //       sender_name: "IMD",
  //       description: "Cyclonic storm forming over the Arabian Sea.",
  //       lat: 15.2993,
  //       lon: 74.124,
  //       severity: "severe",
  //       location: "Goa",
  //     },
  //     {
  //       event: "Thunderstorm Alert",
  //       sender_name: "IMD",
  //       description: "Severe thunderstorms with lightning expected.",
  //       lat: 22.5726,
  //       lon: 88.3639,
  //       severity: "moderate",
  //       location: "Kolkata",
  //     },
  //     {
  //       event: "Earthquake Advisory",
  //       sender_name: "USGS",
  //       description: "Moderate seismic activity detected. Stay alert.",
  //       lat: 28.7041,
  //       lon: 77.1025,
  //       severity: "low",
  //       location: "Delhi",
  //     },
  //     {
  //       event: "Landslide Warning",
  //       sender_name: "NDMA",
  //       description: "Risk of landslides due to continuous rainfall.",
  //       lat: 30.3165,
  //       lon: 78.0322,
  //       severity: "severe",
  //       location: "Dehradun",
  //     },
  //   ];

  //   setAlerts(mockAlerts);
  // }, []);

  const lenAlerts = alerts.length;
  const unreadCount = notifications.length;

  useEffect(() => {
    const mockAlerts = [
      {
        event: "Flood Warning",
        sender_name: "IMD",
        description: "Heavy rainfall may cause flooding in low-lying areas.",
        lat: 19.076,
        lon: 72.8777,
        severity: "severe",
        location: "Mumbai",
      },
      {
        event: "Heatwave Alert",
        sender_name: "IMD",
        description: "Extreme temperatures expected. Avoid outdoor activities.",
        lat: 18.5204,
        lon: 73.8567,
        severity: "moderate",
        location: "Pune",
      },
      {
        event: "Cyclone Watch",
        sender_name: "IMD",
        description: "Cyclonic storm forming over the Arabian Sea.",
        lat: 15.2993,
        lon: 74.124,
        severity: "severe",
        location: "Goa",
      },
      {
        event: "Thunderstorm Alert",
        sender_name: "IMD",
        description: "Severe thunderstorms with lightning expected.",
        lat: 22.5726,
        lon: 88.3639,
        severity: "moderate",
        location: "Kolkata",
      },
      {
        event: "Earthquake Advisory",
        sender_name: "USGS",
        description: "Moderate seismic activity detected. Stay alert.",
        lat: 28.7041,
        lon: 77.1025,
        severity: "low",
        location: "Delhi",
      },
      {
        event: "Landslide Warning",
        sender_name: "NDMA",
        description: "Risk of landslides due to continuous rainfall.",
        lat: 30.3165,
        lon: 78.0322,
        severity: "severe",
        location: "Dehradun",
      },
    ];
    setAlerts(mockAlerts);

    const generatedNotifications = mockAlerts
      .filter((alert) => alert.severity === "severe")
      .map((alert) => ({
        title: alert.event,
        message: alert.description,
        time: new Date().toLocaleTimeString(),
        read: false,
      }));

    setNotifications(generatedNotifications);

    const timer = setTimeout(() => {
      setNotifications((prev) => [
        ...prev,
        {
          title: "Cyclone Watch",
          message: "Cyclonic storm approaching coastal region.",
          time: new Date().toLocaleTimeString(),
        },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation isLoggedIn={true} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            padding: "2rem",
            background: "#f9fafb",
            overflow: "auto",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                color: "#111827",
              }}
            >
              Dashboard
            </h1>
            <p style={{ color: "#6b7280" }}>
              Real-time disaster monitoring and alerts
            </p>
          </div>

          {/* Alert Summary */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {[
              {
                label: "Active Alerts",
                value: lenAlerts,
                color: "#dc2626",
                icon: <AlertTriangle size={24} />,
              },
              {
                label: "Recent Disasters",
                value: lenAlerts,
                color: "#f59e0b",
                icon: <MapPin size={24} />,
              },
              {
                label: "Unread Notifications",
                value: unreadCount,
                color: "#3b82f6",
                icon: (
                  <Bell onClick={() => setShowNotifications(true)} size={24} />
                ),
                // onClick: () => setShowNotifications(true),
              },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: `${stat.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: stat.color,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {showNotifications && (
            <NotificationModal
              notifications={notifications}
              onClose={() => setShowNotifications(false)}
            />
          )}

          {/* Live Map Section */}
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "1.5rem",
              marginBottom: "2rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#111827",
              }}
            >
              <Map size={24} color="#3b82f6" />
              Live Disaster Map
            </h2>
            <p style={{ color: "#111827" }}>
              No active alerts (showing demo data)
            </p>
            <DisasterMap alerts={alerts} center={location} />

            {/* {alerts.length === 0 ? (
              <p style={{ color: "#111827" }}>No active alerts (showing demo data)
</p>
            ) : (
              <DisasterMap alerts={alerts} center={location} />
            )} */}
          </div>

          {/* Recent Disasters */}
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "1.5rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Recent Disasters
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                      }}
                    >
                      Type
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                      }}
                    >
                      Location
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                      }}
                    >
                      Severity
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                      }}
                    >
                      Source
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                        color: "#111827",
                      }}
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {alerts?.map((disaster, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "1rem" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            color: "#111827",
                          }}
                        >
                          <AlertTriangle size={16} />
                          {disaster.event}
                        </div>
                      </td>
                      <td style={{ padding: "1rem", color: "#6b7280" }}>
                        {disaster.location}
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <span
                          style={{
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            background:
                              disaster.severity === "severe"
                                ? "#fee2e2"
                                : disaster.severity === "moderate"
                                ? "#fef3c7"
                                : "#dcfce7",
                            color:
                              disaster.severity === "severe"
                                ? "rgb(153, 27, 27)"
                                : disaster.severity === "moderate"
                                ? "#92400e"
                                : "#166534",
                          }}
                        >
                          {disaster.severity}
                        </span>
                      </td>
                      <td style={{ padding: "1rem", color: "#6b7280" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          {/* <Clock size={14} /> */}
                          {disaster.sender_name}
                        </div>
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <span
                          style={{
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            fontSize: "0.875rem",
                            color: "#4b5563",
                            textAlign: "center",
                            display: "flex",
                            alignContent: "center",
                            // background:
                            //   disaster.status === "Active"
                            //     ? "#dbeafe"
                            //     : disaster.status === "Monitoring"
                            //     ? "#fef3c7"
                            //     : "#f3f4f6",
                            // color:
                            //   disaster.status === "Active"
                            //     ? "#1e40af"
                            //     : disaster.status === "Monitoring"
                            //     ? "#92400e"
                            //     : "#4b5563",
                          }}
                        >
                          {disaster.description}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "#fff",
              borderRadius: "6px",
              fontSize: "0.875rem",
              color: "#6b7280",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Data sources: USGS, NOAA, WHO, Local Authorities</span>
            <span>Last updated: 5 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
