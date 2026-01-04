import React from "react";
import { X, AlertTriangle } from "react-feather";

const NotificationModal = ({ notifications, onClose }) => (
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
        onClick={onClose}
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
        // key={index}
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
        </div>
      </div>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        notifications.map((n, index) => {
          return (
            <>
              <div style={{ marginBottom: "1.5rem" }}>
                <strong style={{ color: "#000", fontSize: "1rem" }}>
                  {n.title}
                </strong>

                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: "1.6",
                    marginBottom: "0.5rem",
                  }}
                >
                  {n.message}
                </p>
                <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>
                  {n.time}
                </p>
              </div>
            </>
          );
        })
      )}

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={onClose}
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
          onClick={onClose}
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

export default NotificationModal;

// export default function NotificationModal({ notifications, onClose }) {
//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h3>Notifications</h3>

//         {notifications.length === 0 ? (
//           <p>No new notifications</p>
//         ) : (
//           notifications.map((n, index) => (
//             <div key={index} className="notification-card">
//               <strong style={{ color: "#000" }}>{n.title}</strong>
//               <p style={{ color: "#000" }}>{n.message}</p>
//               <small style={{ color: "#000" }}>{n.time}</small>
//             </div>
//           ))
//         )}

//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }
