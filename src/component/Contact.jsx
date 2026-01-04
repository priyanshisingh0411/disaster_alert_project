import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Contact() {
  return (
    <div>
      <Navigation isLoggedIn={false} />
      <div
        style={{
          background: "#ededed",
          padding: "2rem",
          //   borderRadius: "8px",
          //   marginBottom: "2rem",
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
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
