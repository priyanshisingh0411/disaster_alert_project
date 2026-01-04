"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Marker icons
const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32],
});

const orangeIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
  iconSize: [32, 32],
});
const greenIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [32, 32],
});

export default function DisasterMap({ alerts, center }) {
  return (
    <MapContainer
      center={
        Array.isArray(center)
          ? center
          : [center.lat || 0, center.lon ?? center.lng ?? 0]
      }
      zoom={5}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {alerts.map((alert, index) => (
        <Marker
          key={index}
          position={
            alert.lat && alert.lon
              ? [alert.lat, alert.lon]
              : [center.lat || 0, center.lon ?? center.lng ?? 0]
          }
          //   icon={
          //     alert && alert.event && alert.event.toLowerCase().includes("flood")
          //       ? redIcon
          //       : orangeIcon
          //   }
          icon={
            alert.severity === "severe"
              ? redIcon
              : alert.severity === "moderate"
              ? orangeIcon
              : greenIcon
          }
        >
          <Popup>
            <strong>{alert.event}</strong>
            <br />
            Source: {alert.sender_name}
            <br />
            {alert.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
