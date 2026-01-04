"use client";
import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Map, Bell, AlertTriangle } from "lucide-react";
const LandingPage = ({ currentPage, setCurrentPage }) => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      isLoggedIn={false}
    />
    <div
      style={{
        flex: 1,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "4rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "800px", textAlign: "center", color: "#fff" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Real-Time Disaster Monitoring & Alert System
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}>
          Stay informed with live disaster tracking, intelligent alerts, and
          comprehensive data analysis. Protect what matters most with instant
          notifications.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            onClick={() => setCurrentPage("signup")}
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.125rem",
              background: "#dc2626",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Sign Up Free
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1.125rem",
              background: "#fff",
              color: "#667eea",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
    <div style={{ background: "#fff", padding: "4rem 2rem" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {[
          {
            icon: <Map size={40} />,
            title: "Live Mapping",
            desc: "Interactive maps showing real-time disaster locations",
          },
          {
            icon: <Bell size={40} />,
            title: "Instant Alerts",
            desc: "Get notified immediately when disasters occur in your area",
          },
          {
            icon: <AlertTriangle size={40} />,
            title: "Severity Analysis",
            desc: "AI-powered risk assessment and severity tracking",
          },
        ].map((feature, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "2rem",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                color: "#3b82f6",
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
              }}
            >
              {feature.title}
            </h3>
            <p style={{ color: "#6b7280" }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default LandingPage;
