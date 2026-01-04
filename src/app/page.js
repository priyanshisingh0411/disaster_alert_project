"use client";
import Footer from "@/component/Footer";
import LandingPage from "@/component/LandingPage";
import LoginPage from "@/component/LoginPage";
import Navigation from "@/component/Navigation";
import Sidebar from "@/component/Sidebar";
import SignUpPage from "@/component/SignUpPage";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return localStorage.getItem("currentUser") || null;
    } catch (e) {
      return null;
    }
  });
  console.log("current : ", currentPage);
  const [showNotification, setShowNotification] = useState(false);
  const [userRole, setUserRole] = useState(() => {
    try {
      return localStorage.getItem("userRole") || "user";
    } catch (e) {
      return "user";
    }
  });

  // persist userRole to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("currentUser", currentUser);
    } catch (e) {
      // ignore write errors (e.g. private mode)
    }
  }, [userRole, currentUser]);

  // sync userRole across tabs
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "userRole") {
        try {
          if (e.newValue) setUserRole(e.newValue);
        } catch (err) {}
      }
      if (e.key === "currentUser") {
        try {
          setCurrentUser(e.newValue || null);
        } catch (err) {}
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  if (currentPage === "login") return <LoginPage />;
  if (currentPage === "signup") return <SignUpPage />;

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto h-100vh">
      <div className="max-w-7xl w-full">
        {/* <Navigation /> */}
        {/* <Sidebar userRole={userRole} /> */}
        <LandingPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {/* <Footer /> */}
      </div>
    </main>
  );
}
