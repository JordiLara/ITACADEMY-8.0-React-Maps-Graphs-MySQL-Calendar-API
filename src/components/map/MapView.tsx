import Map, { NavigationControl } from "react-map-gl";
import { ViewState, MAP_CONFIG } from "../../types/map";
import "mapbox-gl/dist/mapbox-gl.css";

interface MapViewProps {
  viewState: ViewState;
  onViewStateChange: (viewState: ViewState) => void;
}

const MapView = ({ viewState, onViewStateChange }: MapViewProps) => {
  return (
    <Map
      {...viewState}
      onMove={(evt) => onViewStateChange(evt.viewState)}
      mapStyle={MAP_CONFIG.mapStyle}
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
    >
        <NavigationControl position='top-right' />
    </Map>
  );
};

export default MapView;
