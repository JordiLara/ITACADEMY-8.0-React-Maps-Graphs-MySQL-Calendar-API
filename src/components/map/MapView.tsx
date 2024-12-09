import Map, { NavigationControl, Marker } from "react-map-gl";
import { Route } from "../../types/route";
import { MAP_CONFIG } from "../../types/map";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapViewProps {
  routes: Route[]; // Ahora recibe las rutas directamente como props
}

const MapView: React.FC<MapViewProps> = ({ routes }) => {
  return (
    <Map
      initialViewState={{
        longitude: MAP_CONFIG.defaultCenter.longitude,
        latitude: MAP_CONFIG.defaultCenter.latitude,
        zoom: MAP_CONFIG.defaultZoom,
      }}
      mapStyle={MAP_CONFIG.mapStyle}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
      <NavigationControl position="top-right" />
      {/* Renderiza un marcador para cada ruta */}
      {routes.map((route) => (
        <Marker
          key={route.id}
          longitude={route.longitud_origen}
          latitude={route.latitud_origen}
          anchor="bottom"
        >
          <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs shadow-md">
            {route.origen}
          </div>
        </Marker>
      ))}
    </Map>
  );
};

export default MapView;
