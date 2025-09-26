import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export type GeoLocation = [number, number] | null;

// Fix default marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Recenter({ position }: { position: GeoLocation }) {
  const map = useMap();
  useEffect(() => {
    if (position) map.setView(position);
  }, [position, map]);

  return null;
}

function ClickMarker({
  setClickPosition,
}: {
  setClickPosition: (position: GeoLocation) => void;
}) {
  useMapEvent("click", (e) => {
    setClickPosition([e.latlng.lat, e.latlng.lng]);
  });

  return null;
}

export default function Map({
  position,
  setPosition,
}: {
  position: GeoLocation;
  setPosition: (position: GeoLocation) => void;
}) {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          toast.error(err.message);
        },
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    position && (
      <MapContainer
        center={position}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        wheelDebounceTime={1}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri &mdash; Source: Esri, NASA, USGS"
        />
        {/* Labels overlay */}
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          attribution="Labels &copy; Esri"
        />
        <ClickMarker setClickPosition={setPosition} />
        <Marker position={position}>
          <Popup>You are Here</Popup>
        </Marker>
        <Recenter position={position} />
      </MapContainer>
    )
  );
}
