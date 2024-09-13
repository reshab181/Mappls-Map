import React, { useEffect, useRef, useState } from 'react';
import { mappls } from 'mappls-web-maps';
import './MapComponent.css';
import { Grid } from 'react-loader-spinner';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const loadObject = {
    map: true,
    layer: 'raster',
    version: '3.0',
    libraries: ['polydraw'],
    plugins: ['direction']
  };

  useEffect(() => {
    const mapplsClassObject = new mappls();
    mapplsClassObject.initialize(import.meta.env.VITE_ACCESS_TOKEN, loadObject, () => {
      const newMap = mapplsClassObject.Map({
        id: 'map',
        properties: {
          center: [28.633, 77.2194],
          zoom: 4
        }
      });

      newMap.on("load", () => {
        setIsMapLoaded(true);
      });
      mapRef.current = newMap;
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  const handleSetCenter = () => {
    mapRef.current.setCenter({ lat: 28.6139, lng: 77.2090 });
  };

  const handleSetZoom = () => {
    mapRef.current.setZoom(12);
  };

  return (
    <>
    <div
                id="map"
                style={{ width: "75vw", height: "100vh", display: "inline-block" }}
            >
                {!isMapLoaded &&
                    <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <Grid
                            visible={true}
                            height="80"
                            width="80"
                            color="#ffffff"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            wrapperClass="grid-wrapper"
                        />
                        <div style={{ fontWeight: '500', fontSize: '14px', color: 'white' }}>Loading Map...</div>
                    </div>}
                {isMapLoaded}
        
      <div className="controls">
        <button onClick={handleSetCenter} className="control-button">Set Center</button>
        <button onClick={handleSetZoom} className="control-button">Set Zoom</button>
      </div>
      </div>
    
    </>
  );
};

export default MapComponent;
