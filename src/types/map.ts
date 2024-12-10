export interface ViewState {
    longitude: number;
    latitude: number;
    zoom: number;
}

export interface MapConfig {
    defaultCenter: {
        longitude:number;
        latitude: number; 
    };
    defaultZoom: number;
    mapStyle: string;
}

export const MAP_CONFIG: MapConfig = {
    defaultCenter: {
        longitude: 1.7167,
        latitude: 41.7000
    },
    defaultZoom: 7,
    mapStyle: 'mapbox://styles/mapbox/outdoors-v12'
};

export interface RouteData {
    type: 'Feature',
    properties: Record<string, unknown>;
    geometry: {
        coordinates: number[][];
        type: string;
    };
}