import React, { useState } from "react";
import Map, { NavigationControl, Marker, Popup } from "react-map-gl";
import { Route } from "../../types/route";
import { MAP_CONFIG, ViewState } from "../../types/map";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapViewProps {
  routes: Route[];
}

const MapView: React.FC<MapViewProps> = ({ routes }) => {
  const [popupInfo, setPopupInfo] = useState<Route | null>(null);
  const [viewState, setViewState] = useState<ViewState>({
    longitude: MAP_CONFIG.defaultCenter.longitude,
    latitude: MAP_CONFIG.defaultCenter.latitude,
    zoom: MAP_CONFIG.defaultZoom,
  });

  const getMarkerColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "baja":
        return "green";
      case "media":
        return "orange";
      case "alta":
        return "red";
      default:
        return "grey";
    }
  };
  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle={MAP_CONFIG.mapStyle}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
      <NavigationControl position="top-right" />

      {routes.map((route) => (
        <Marker
          key={route.id}
          longitude={route.longitud_origen}
          latitude={route.latitud_origen}
          color={getMarkerColor(route.dificultad)}
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(route);
          }}
        />
      ))}
      {popupInfo && (
        <Popup
          longitude={popupInfo.longitud_origen}
          latitude={popupInfo.latitud_origen}
          anchor="top"
          onClose={() => setPopupInfo(null)}
        >
          <div className="p-2">
            <h3 className="font-bold">{popupInfo.origen}</h3>
            <p>{popupInfo.descripcion}</p>
            <p>
              <strong>Distancia:</strong> {popupInfo.distancia_km} km
            </p>
            <p>
              <strong>Desnivel:</strong> {popupInfo.desnivel_m} m
            </p>
            <p>
              <strong>Dificultad</strong>{" "}
              <span
                className={`text-${getMarkerColor(
                  popupInfo.dificultad
                )}-500 font-bold`}
              >
                {popupInfo.dificultad}
              </span>
            </p>
          </div>
        </Popup>
      )}
    </Map>
  );
};

export default MapView;
