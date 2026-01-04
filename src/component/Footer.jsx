import React from "react";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";
import Linkedin from "../public/linkedin.svg";
import Image from "next/image";

const Footer = () => (
  <footer
    style={{
      background: "#000",
      color: "#fff",
      padding: "1rem",
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
        <p>© 2025 DisasterWatch. All rights reserved.</p>
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
        <a>
          <Image
            style={{
              background: "#9ca3af",
              borderRadius: "4px",
              padding: "2px",
            }}
            src={twitter}
            alt="twitter"
            width={20}
            height={20}
          />
        </a>
        <a>
          <Image
            style={{
              background: "#9ca3af",
              borderRadius: "4px",
              padding: "2px",
            }}
            src={facebook}
            alt="Facebook"
            width={20}
            height={20}
          />
        </a>
        <a>
          <Image
            style={{
              background: "#9ca3af",
              borderRadius: "4px",
              padding: "2px",
            }}
            src={Linkedin}
            alt="Linkedin"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
