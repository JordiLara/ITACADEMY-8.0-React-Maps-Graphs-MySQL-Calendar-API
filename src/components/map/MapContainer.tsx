import { useState } from 'react';
import MapView from './MapView';
import { ViewState, MAP_CONFIG } from "../../types/map"




const MapContainer = () => {
    const [viewState, setViewState] = useState<ViewState>({
        longitude: MAP_CONFIG.defaultCenter.longitude,
        latitude: MAP_CONFIG.defaultCenter.latitude,
        zoom: MAP_CONFIG.defaultZoom
    });

    return (
        <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-bold text-stone-800 mb-'>Mapa de Rutes</h2>
            <div className='h-[600px] rounded-lg overflow-hidden'>
                <MapView viewState={viewState} onViewStateChange={setViewState} />
            </div>
        </div>
    );
};

export default MapContainer;