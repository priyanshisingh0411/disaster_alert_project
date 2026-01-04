import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";

const AdminUsers = () => (
  <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
                        color: user.status === "Active" ? "#166534" : "#991b1b",
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

export default AdminUsers;
