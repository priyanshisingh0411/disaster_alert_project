"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginData } from "@/Data/login";

const LoginPage = () => {
  const router = useRouter();
  // default to first user credentials for quick testing
  const defaultUser = loginData.users && loginData.users[0];
  const [email, setEmail] = useState(defaultUser ? defaultUser.email : "");
  const [password, setPassword] = useState(
    defaultUser ? defaultUser.password : ""
  );

  const handleLogin = () => {
    const all = [...(loginData.users || []), ...(loginData.admin || [])];
    const found = all.find((u) => u.email === email && u.password === password);
    if (found) {
      try {
        localStorage.setItem("userRole", found.role || "user");
        localStorage.setItem("username", found.username || found.email || "");
        // also set currentUser for app state
        localStorage.setItem("currentUser", found.username || found.email || "");
      } catch (e) {}
      if (found.role === "admin") router.push("/admin");
      else router.push("/dashboard");
    } else {
      alert("Invalid credentials (use sample credentials from Data/login.js)");
    }
  };

  return (
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
          color: "#111827",
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleLogin}
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
            Don't have an account?
            <button
              onClick={() => router.push("/signup")}
              style={{ color: "#3b82f6", cursor: "pointer" }}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
