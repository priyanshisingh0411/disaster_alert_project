"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircleUser, Users } from "lucide-react";
import Link from "next/link";
import { loginData } from "@/Data/login";
import Image from "next/image";
import logo from "../public/final.png";

const Navigation = ({ isLoggedIn, currentPage, setCurrentPage }) => {
  const router = useRouter();

  const [username, setUsername] = useState(() => {
    try {
      return localStorage.getItem("currentUser") || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "currentUser") setUsername(e.newValue || null);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("userRole");
    } catch {}
    setUsername(null);
    router.push("/");
  };

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "2px solid #a0a0a0",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // position: "fixed",
      }}
    >
      <div>
        <Image src={logo} alt="logo" width={200} />
      </div>
      {!isLoggedIn ? (
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {/* <Link href="/auth/login">Login</Link> */}

          <Link
            href="/"
            // onClick={() => setCurrentPage("landing")}
            style={{ cursor: "pointer", color: "#4b5563" }}
          >
            Home
          </Link>
          <Link
            href="/about"
            // onClick={() => setCurrentPage("about")}
            style={{ cursor: "pointer", color: "#4b5563" }}
          >
            About
          </Link>
          <Link href="/contact" style={{ cursor: "pointer", color: "#4b5563" }}>
            Contact
          </Link>
          <button
            onClick={() => router.push("/login")}
            style={{
              padding: "0.5rem 1.5rem",
              background: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              backgroundColor: "#764ba2",
            }}
          >
            Log In
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <div
            style={{
              // width: "40px",
              // height: "40px",
              // borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircleUser size={25} color="#000" />
            <p style={{ color: "#000" }}>{username || "Guest"}</p>

            {/* <Users size={20} /> */}
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: "0.5rem 1rem",
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor: "#f87171",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
