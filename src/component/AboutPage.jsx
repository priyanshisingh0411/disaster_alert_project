import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { ChevronRight } from "react-feather";
import Footer from "./Footer";
import Image from "next/image";
import logo from "../public/final.png";

const AboutPage = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <Navigation
    // isLoggedIn={
    //   currentPage.includes("admin") ||
    //   currentPage === "dashboard" ||
    //   currentPage === "alerts" ||
    //   currentPage === "settings"
    // }
    />
    <div style={{ display: "flex", flex: 1 }}>
      {/* {(currentPage.includes("admin") ||
        currentPage === "dashboard" ||
        currentPage === "alerts" ||
        currentPage === "settings") && <Sidebar active="about" />} */}
      <div style={{ flex: 1, padding: "3rem", background: "#fff" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#111827",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            About{" "}
            <div>
              <Image src={logo} alt="logo" width={200} />
            </div>
          </h1>

          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Project Overview
            </h2>
            <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
              DisasterWatch is a comprehensive real-time disaster monitoring and
              alert system designed to keep communities informed and safe. Our
              platform aggregates data from multiple authoritative sources to
              provide accurate, timely information about natural disasters
              worldwide.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Data Sources & APIs
            </h2>
            <ul
              style={{
                color: "#4b5563",
                lineHeight: "1.7",
                paddingLeft: "1.5rem",
              }}
            >
              <li>USGS (United States Geological Survey) - Earthquake data</li>
              <li>
                NOAA (National Oceanic and Atmospheric Administration) - Weather
                and hurricane data
              </li>
              <li>
                WHO (World Health Organization) - Pandemic and health emergency
                data
              </li>
              <li>Local Government Agencies - Regional disaster updates</li>
              <li>NASA - Satellite imagery and wildfire detection</li>
            </ul>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Key Features
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {[
                "Real-time disaster tracking with interactive maps",
                "Intelligent alert system with customizable notifications",
                "Severity-based classification and risk assessment",
                "Multi-channel notifications (browser, email, SMS)",
                "Historical data and trend analysis",
                "Mobile-responsive design for on-the-go access",
              ].map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "start",
                  }}
                >
                  <ChevronRight
                    size={20}
                    color="#3b82f6"
                    style={{ marginTop: "0.25rem" }}
                  />
                  <span style={{ color: "#4b5563" }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#ededed",
              padding: "2rem",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              Contact & Feedback
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "#111827",
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
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  style={{
                    width: "100%",
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
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
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
                  Message
                </label>
                <textarea
                  placeholder="Your feedback or questions"
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #e5e7eb",
                    borderRadius: "6px",
                    resize: "vertical",
                  }}
                />
              </div>
              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "rgb(165 153 153)",
                  color: "#fff",
                  fontWeight: "600",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
