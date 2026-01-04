"use client";
import React, { useState } from "react";
import {
  AlertTriangle,
  Bell,
  Settings,
  Info,
  Map,
  Users,
  Database,
  FileText,
  X,
  Menu,
  ChevronRight,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function DisasterManagementWireframe() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [showNotification, setShowNotification] = useState(false);
  const [userRole, setUserRole] = useState("user"); // 'user' or 'admin'

  // Navigation component

  // const Navigation = ({ isLoggedIn }) => (
  //   <nav style={{
  //     background: '#fff',
  //     borderBottom: '2px solid #e5e7eb',
  //     padding: '1rem 2rem',
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     alignItems: 'center'
  //   }}>
  //     <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
  //       DisasterWatch
  //     </div>
  //     {!isLoggedIn ? (
  //       <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
  //         <a onClick={() => setCurrentPage('landing')} style={{ cursor: 'pointer', color: '#4b5563' }}>Home</a>
  //         <a onClick={() => setCurrentPage('about')} style={{ cursor: 'pointer', color: '#4b5563' }}>About</a>
  //         <a style={{ cursor: 'pointer', color: '#4b5563' }}>Contact</a>
  //         <button onClick={() => setCurrentPage('login')} style={{
  //           padding: '0.5rem 1.5rem',
  //           background: '#3b82f6',
  //           color: '#fff',
  //           border: 'none',
  //           borderRadius: '6px',
  //           cursor: 'pointer'
  //         }}>
  //           Log In
  //         </button>
  //       </div>
  //     ) : (
  //       <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
  //         <div style={{
  //           width: '40px',
  //           height: '40px',
  //           borderRadius: '50%',
  //           background: '#e5e7eb',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}>
  //           <Users size={20} />
  //         </div>
  //         <button onClick={() => setCurrentPage('landing')} style={{
  //           padding: '0.5rem 1rem',
  //           background: '#fff',
  //           border: '1px solid #e5e7eb',
  //           borderRadius: '6px',
  //           cursor: 'pointer'
  //         }}>
  //           Logout
  //         </button>
  //       </div>
  //     )}
  //   </nav>
  // );

  // Sidebar for dashboard

  // const Sidebar = ({ active }) => (
  //   <div style={{
  //     width: '250px',
  //     background: '#f9fafb',
  //     borderRight: '2px solid #e5e7eb',
  //     padding: '2rem 0',
  //     height: '100%'
  //   }}>
  //     {(userRole === 'user' ? [
  //       { id: 'dashboard', label: 'Dashboard', icon: <Map size={20} /> },
  //       { id: 'alerts', label: 'Alerts', icon: <Bell size={20} /> },
  //       { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  //       { id: 'about', label: 'About', icon: <Info size={20} /> }
  //     ] : [
  //       { id: 'admin-overview', label: 'Overview', icon: <Map size={20} /> },
  //       { id: 'admin-users', label: 'Manage Users', icon: <Users size={20} /> },
  //       { id: 'admin-data', label: 'Data Sources', icon: <Database size={20} /> },
  //       { id: 'admin-logs', label: 'System Logs', icon: <FileText size={20} /> }
  //     ]).map(item => (
  //       <div
  //         key={item.id}
  //         onClick={() => setCurrentPage(item.id)}
  //         style={{
  //           padding: '1rem 2rem',
  //           display: 'flex',
  //           alignItems: 'center',
  //           gap: '1rem',
  //           cursor: 'pointer',
  //           background: active === item.id ? '#e0f2fe' : 'transparent',
  //           borderLeft: active === item.id ? '4px solid #3b82f6' : '4px solid transparent',
  //           color: active === item.id ? '#0369a1' : '#4b5563',
  //           transition: 'all 0.2s'
  //         }}
  //       >
  //         {item.icon}
  //         <span style={{ fontWeight: active === item.id ? '600' : '400' }}>
  //           {item.label}
  //         </span>
  //       </div>
  //     ))}
  //   </div>
  // );

  // Footer
  const Footer = () => (
    <footer
      style={{
        background: "#1f2937",
        color: "#fff",
        padding: "2rem",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>© 2024 DisasterWatch. All rights reserved.</p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#9ca3af",
              marginTop: "0.5rem",
            }}
          >
            contact@disasterwatch.com | +1-800-DISASTER
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a style={{ color: "#9ca3af" }}>Twitter</a>
          <a style={{ color: "#9ca3af" }}>Facebook</a>
          <a style={{ color: "#9ca3af" }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );

  // Landing Page

  const LandingPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation isLoggedIn={false} />
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
          <p
            style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.9 }}
          >
            Stay informed with live disaster tracking, intelligent alerts, and
            comprehensive data analysis. Protect what matters most with instant
            notifications.
          </p>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
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

  // Sign Up Page

  const SignUpPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation isLoggedIn={false} />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9fafb",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "3rem",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Create Account
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
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
                placeholder="John Doe"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "1rem",
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
                placeholder="john@example.com"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "1rem",
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
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "1rem",
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
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "1rem",
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
                Role
              </label>
              <div style={{ display: "flex", gap: "1rem" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <input type="radio" name="role" value="user" defaultChecked />
                  <span>User</span>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <input type="radio" name="role" value="admin" />
                  <span>Admin</span>
                </label>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage("dashboard")}
              style={{
                padding: "1rem",
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Create Account
            </button>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              color: "#6b7280",
            }}
          >
            Already have an account?{" "}
            <a
              onClick={() => setCurrentPage("login")}
              style={{ color: "#3b82f6", cursor: "pointer" }}
            >
              Log In
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );

  // Login Page

  const LoginPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation isLoggedIn={false} />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9fafb",
          padding: "2rem",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "3rem",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            maxWidth: "450px",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Welcome Back
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
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
                placeholder="john@example.com"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "1rem",
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
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "1rem",
                }}
              />
            </div>
            <div style={{ textAlign: "right" }}>
              <a
                style={{
                  color: "#3b82f6",
                  fontSize: "0.875rem",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </a>
            </div>
            <button
              onClick={() => setCurrentPage("dashboard")}
              style={{
                padding: "1rem",
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Log In
            </button>
          </div>
          <p
            style={{
              textAlign: "center",
              marginTop: "1.5rem",
              color: "#6b7280",
            }}
          >
            Don't have an account?{" "}
            <a
              onClick={() => setCurrentPage("signup")}
              style={{ color: "#3b82f6", cursor: "pointer" }}
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );

  // Dashboard Page

  const DashboardPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation isLoggedIn={true} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar active="dashboard" />
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
                value: "12",
                color: "#dc2626",
                icon: <AlertTriangle size={24} />,
              },
              {
                label: "Recent Disasters",
                value: "28",
                color: "#f59e0b",
                icon: <MapPin size={24} />,
              },
              {
                label: "Unread Notifications",
                value: "5",
                color: "#3b82f6",
                icon: <Bell size={24} />,
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
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

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
              }}
            >
              <Map size={24} color="#3b82f6" />
              Live Disaster Map
            </h2>
            <div
              style={{
                height: "400px",
                background: "#e5e7eb",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                backgroundImage:
                  "linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%), linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 10px 10px",
              }}
            >
              {[
                { top: "30%", left: "25%", severity: "high" },
                { top: "50%", left: "60%", severity: "medium" },
                { top: "70%", left: "40%", severity: "low" },
                { top: "20%", left: "75%", severity: "high" },
                { top: "65%", left: "15%", severity: "medium" },
              ].map((marker, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: marker.top,
                    left: marker.left,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background:
                      marker.severity === "high"
                        ? "#dc2626"
                        : marker.severity === "medium"
                        ? "#f59e0b"
                        : "#22c55e",
                    border: "3px solid #fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    cursor: "pointer",
                    animation: "pulse 2s infinite",
                  }}
                />
              ))}
              <div style={{ color: "#9ca3af", fontSize: "1.5rem" }}>
                <MapPin size={48} />
              </div>
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "2rem",
                fontSize: "0.875rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#dc2626",
                  }}
                />
                <span>High Severity</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#f59e0b",
                  }}
                />
                <span>Medium Severity</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#22c55e",
                  }}
                />
                <span>Low Severity</span>
              </div>
            </div>
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
                      }}
                    >
                      Type
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      Location
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      Severity
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      Time
                    </th>
                    <th
                      style={{
                        padding: "1rem",
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      type: "Earthquake",
                      location: "California, USA",
                      severity: "High",
                      time: "2 hours ago",
                      status: "Active",
                    },
                    {
                      type: "Flood",
                      location: "Mumbai, India",
                      severity: "Medium",
                      time: "5 hours ago",
                      status: "Active",
                    },
                    {
                      type: "Hurricane",
                      location: "Florida, USA",
                      severity: "High",
                      time: "8 hours ago",
                      status: "Monitoring",
                    },
                    {
                      type: "Wildfire",
                      location: "Sydney, Australia",
                      severity: "Medium",
                      time: "12 hours ago",
                      status: "Resolved",
                    },
                    {
                      type: "Tornado",
                      location: "Texas, USA",
                      severity: "Low",
                      time: "1 day ago",
                      status: "Resolved",
                    },
                  ].map((disaster, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                      <td style={{ padding: "1rem" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <AlertTriangle size={16} />
                          {disaster.type}
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
                            background:
                              disaster.severity === "High"
                                ? "#fee2e2"
                                : disaster.severity === "Medium"
                                ? "#fef3c7"
                                : "#dcfce7",
                            color:
                              disaster.severity === "High"
                                ? "#991b1b"
                                : disaster.severity === "Medium"
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
                          <Clock size={14} />
                          {disaster.time}
                        </div>
                      </td>
                      <td style={{ padding: "1rem" }}>
                        <span
                          style={{
                            padding: "0.25rem 0.75rem",
                            borderRadius: "9999px",
                            fontSize: "0.875rem",
                            background:
                              disaster.status === "Active"
                                ? "#dbeafe"
                                : disaster.status === "Monitoring"
                                ? "#fef3c7"
                                : "#f3f4f6",
                            color:
                              disaster.status === "Active"
                                ? "#1e40af"
                                : disaster.status === "Monitoring"
                                ? "#92400e"
                                : "#4b5563",
                          }}
                        >
                          {disaster.status}
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

  // Alerts Page

  const AlertsPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
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
                        color={
                          alert.severity === "High" ? "#dc2626" : "#f59e0b"
                        }
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

  // Settings Page

  const SettingsPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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

  // About Page
  const AboutPage = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation
        isLoggedIn={
          currentPage.includes("admin") ||
          currentPage === "dashboard" ||
          currentPage === "alerts" ||
          currentPage === "settings"
        }
      />
      <div style={{ display: "flex", flex: 1 }}>
        {(currentPage.includes("admin") ||
          currentPage === "dashboard" ||
          currentPage === "alerts" ||
          currentPage === "settings") && <Sidebar active="about" />}
        <div style={{ flex: 1, padding: "3rem", background: "#fff" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              About DisasterWatch
            </h1>

            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Project Overview
              </h2>
              <p style={{ color: "#4b5563", lineHeight: "1.7" }}>
                DisasterWatch is a comprehensive real-time disaster monitoring
                and alert system designed to keep communities informed and safe.
                Our platform aggregates data from multiple authoritative sources
                to provide accurate, timely information about natural disasters
                worldwide.
              </p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
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
                <li>
                  USGS (United States Geological Survey) - Earthquake data
                </li>
                <li>
                  NOAA (National Oceanic and Atmospheric Administration) -
                  Weather and hurricane data
                </li>
                <li>
                  WHO (World Health Organization) - Pandemic and health
                  emergency data
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
                background: "#f9fafb",
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
                }}
              >
                Contact & Feedback
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
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
                    background: "#3b82f6",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "500",
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

  // Admin Pages

  const AdminOverview = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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

  const AdminUsers = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navigation isLoggedIn={true} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar active="admin-users" />
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
                User Management
              </h1>
              <p style={{ color: "#6b7280" }}>
                Manage user accounts and permissions
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
              + Add New User
            </button>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                    }}
                  >
                    Role
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      padding: "1rem",
                      textAlign: "left",
                      fontWeight: "600",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "John Doe",
                    email: "john@example.com",
                    role: "User",
                    status: "Active",
                  },
                  {
                    name: "Jane Smith",
                    email: "jane@example.com",
                    role: "Admin",
                    status: "Active",
                  },
                  {
                    name: "Mike Johnson",
                    email: "mike@example.com",
                    role: "User",
                    status: "Inactive",
                  },
                  {
                    name: "Sarah Williams",
                    email: "sarah@example.com",
                    role: "User",
                    status: "Active",
                  },
                  {
                    name: "Tom Brown",
                    email: "tom@example.com",
                    role: "User",
                    status: "Active",
                  },
                ].map((user, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "1rem" }}>{user.name}</td>
                    <td style={{ padding: "1rem", color: "#6b7280" }}>
                      {user.email}
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <span
                        style={{
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          background:
                            user.role === "Admin" ? "#dbeafe" : "#f3f4f6",
                          color: user.role === "Admin" ? "#1e40af" : "#4b5563",
                        }}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <span
                        style={{
                          padding: "0.25rem 0.75rem",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          background:
                            user.status === "Active" ? "#dcfce7" : "#fee2e2",
                          color:
                            user.status === "Active" ? "#166534" : "#991b1b",
                        }}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td style={{ padding: "1rem" }}>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          style={{
                            padding: "0.375rem 0.75rem",
                            background: "#f3f4f6",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "0.875rem",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          style={{
                            padding: "0.375rem 0.75rem",
                            background: "#fee2e2",
                            color: "#991b1b",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "0.875rem",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const AdminDataSources = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
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

  const AdminLogs = () => (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
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

  // Notification Modal

  const NotificationModal = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "90%",
          position: "relative",
        }}
      >
        <button
          onClick={() => setShowNotification(false)}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#6b7280",
          }}
        >
          <X size={24} />
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#fee2e2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AlertTriangle size={28} color="#dc2626" />
          </div>
          <div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#dc2626",
              }}
            >
              High Severity Alert
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
              Earthquake - California, USA
            </p>
          </div>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <p
            style={{
              color: "#4b5563",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
            A magnitude 6.8 earthquake has been detected 15km east of Los
            Angeles. Residents are advised to take immediate safety precautions
            and stay informed about aftershocks.
          </p>
          <div
            style={{
              background: "#f9fafb",
              padding: "1rem",
              borderRadius: "6px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Magnitude:
              </span>
              <span style={{ fontWeight: "600" }}>6.8</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Depth:
              </span>
              <span style={{ fontWeight: "600" }}>12 km</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Time:
              </span>
              <span style={{ fontWeight: "600" }}>2 hours ago</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                Source:
              </span>
              <span style={{ fontWeight: "600" }}>USGS</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => setShowNotification(false)}
            style={{
              flex: 1,
              padding: "0.75rem",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            View on Map
          </button>
          <button
            onClick={() => setShowNotification(false)}
            style={{
              flex: 1,
              padding: "0.75rem",
              background: "#f3f4f6",
              color: "#4b5563",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );

  // Page Router
  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage />;
      case "signup":
        return <SignUpPage />;
      case "login":
        return <LoginPage />;
      case "dashboard":
        return <DashboardPage />;
      case "alerts":
        return <AlertsPage />;
      case "settings":
        return <SettingsPage />;
      case "about":
        return <AboutPage />;
      case "admin-overview":
        return <AdminOverview />;
      case "admin-users":
        return <AdminUsers />;
      case "admin-data":
        return <AdminDataSources />;
      case "admin-logs":
        return <AdminLogs />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; }
      `}</style>
      {renderPage()}
      {showNotification && <NotificationModal />}
    </div>
  );
}
