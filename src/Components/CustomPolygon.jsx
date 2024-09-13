import React, { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';

const CustomPolygon = () => {
  const [map, setMap] = useState(null);
  const [polygon, setPolygon] = useState(null);
  const randomColors = ['black', 'purple', 'red', 'yellow', 'green'];
  
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const initMap = () => {
      const mapInstance = new window.mappls.Map('map', {
        center: [28.61, 77.23],
        zoomControl: true,
        location: true,
      });
      setMap(mapInstance);

      mapInstance.addListener('load', function () {
        const pts = [
          { lat: 29.218021299904706, lng: 76.82642543790467 },
          { lat: 29.531130256948174, lng: 77.6832293345214 },
          { lat: 29.266254550408533, lng: 78.84406042026126 },
          { lat: 28.807123725237517, lng: 80.36419636587112 },
          { lat: 27.980462962586188, lng: 79.75614198762679 },
          { lat: 27.368543382867884, lng: 80.61294588424352 },
          { lat: 26.80257167123321, lng: 80.03253034137452 },
          { lat: 26.876555928133286, lng: 78.92697692638541 },
          { lat: 26.258550770601545, lng: 79.00989343250956 },
          { lat: 26.72853911997632, lng: 76.9093419440307 },
          { lat: 28.004868266263415, lng: 75.36156716304546 },
          { lat: 28.66171186165053, lng: 75.69323318754206 },
        ];

        const polygonInstance = new window.mappls.Polygon({
          map: mapInstance,
          paths: pts,
          fillColor: 'blue',
          fitbounds: true,
        });
        setPolygon(polygonInstance);
        setIsMapLoaded(true); // Set map loaded state to true
      });
    };

    // Load Mappls SDK
    const script = document.createElement('script');
    script.src =
      `https://apis.mappls.com/advancedmaps/api/${import.meta.env.VITE_ACCESS_TOKEN}/map_sdk?layer=vector&v=3.0&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePolygonClick = () => {
    if (polygon) {
      const newColor = randomColors[Math.floor(Math.random() * randomColors.length)];
      polygon.color(newColor); // Use setOptions to update the polygon's fill color
      console.log('Polygon color changed to:', newColor);
    }
  };

  return (
    <div
      id="map"
      style={{ width: "75vw", height: "100vh", display: "inline-block" }} onClick={handlePolygonClick}
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
  );
};

export default CustomPolygon;
