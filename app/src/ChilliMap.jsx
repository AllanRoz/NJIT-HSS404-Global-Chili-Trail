// ChilliMap.jsx
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-ant-path";
import "./styles/chilli-markers.css";
import { tradeRoutes } from "./data/tradeRoutes";
import { trailData } from "./data/trailData";

function ChiliTradeRoutes({ points }) {
  const map = useMap();

  useEffect(() => {
    const idToLatLng = {};
    points.forEach((p) => {
      idToLatLng[p.id] = [p.lat, p.lng];
    });

    const layers = tradeRoutes
      .map((route) => {
        const from = idToLatLng[route.fromId];
        const to = idToLatLng[route.toId];
        if (!from || !to) return null;

        return L.polyline
          .antPath([from, to], {
            paused: false,
            reverse: false,
            delay: 800,
            dashArray: [10, 20],
            weight: 3,
            opacity: 0.7,
            color: "#ff6b6b",
            pulseColor: "#ffe66d",
          })
          .addTo(map);
      })
      .filter(Boolean);

    return () => {
      layers.forEach((layer) => map.removeLayer(layer));
    };
  }, [map, points]);

  return null;
}

export default function ChilliMap({ onRegionSelect }) {
  const center = [20, 0];

  const createMarkerIcon = () =>
    L.divIcon({
      className: "chili-marker",
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

  return (
    <MapContainer
      center={center}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <ChiliTradeRoutes points={trailData} />

      {trailData.map((point) => (
        <Marker
          key={point.id}
          position={[point.lat, point.lng]}
          icon={createMarkerIcon()}
          eventHandlers={{
            click: () => onRegionSelect(point),
          }}
        />
      ))}
    </MapContainer>
  );
}
