import React, { useEffect,useState } from 'react';
import { Grid } from 'react-loader-spinner';

const CustomColorPolyMap = () => {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
  useEffect(() => {
    
    const initMap = () => {
      const map = new window.mappls.Map('map', {
        center: [28.544, 77.5454],
        zoomControl: true,
        location: true,
      });

      map.addListener('load', function () {
        new window.mappls.Polyline({
          map: map,
          path: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  color: '#333',
                },
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [28.55101, 77.26872],
                    [28.55099, 77.26849],
                    [28.55097, 77.26831],
                    [28.55093, 77.26794],
                    [28.55089, 77.2676],
                    [28.55123, 77.26756],
                  ],
                },
              },
              {
                type: 'Feature',
                properties: {
                  color: '#F7455D',
                },
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [28.55123, 77.26756],
                    [28.55145, 77.26758],
                    [28.55168, 77.26758],
                    [28.55168, 77.26758],
                    [28.55168, 77.26758],
                    [28.55172, 77.26759],
                  ],
                },
              },
            ],
          },
          strokeOpacity: 1.0,
          strokeWeight: 9,
          fitbounds: true,
          lineGap: 0,
          fitboundOptions: {
            padding: 120,
            duration: 1000,
          },
          popupHtml: 'Route 1',
          popupOptions: {
            offset: {
              bottom: [0, -20],
            },
          },
        });
        setIsMapLoaded(true);
      });
    };

    // Load Mappls SDK
    const script = document.createElement('script');
    script.src =
      'https://apis.mappls.com/advancedmaps/api/1e40b15f-3a13-4bf6-a4ed-ba974c78eba4/map_sdk?layer=vector&v=3.0&callback=initMap';
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
    id="map"
    style={{ width: "75vw", height: "100vh", display: "inline-block" }}
  >
    {!isMapLoaded && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#ffffff"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperClass="grid-wrapper"
        />
        <div style={{ fontWeight: '500', fontSize: '14px', color: 'white' }}>
          Loading Map...
        </div>
      </div>
    )}
  </div>
  )
};

export default CustomColorPolyMap;
