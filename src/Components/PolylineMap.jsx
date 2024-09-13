import React, { useEffect, useState } from "react";
import { Grid } from 'react-loader-spinner'; // Ensure to import Grid if you're using it for loading spinner

const PolylineMap = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const initMap1 = () => {
      const map = new window.mappls.Map("map", {
        center: [28.544, 77.5454],
        zoomControl: true,
        location: true,
      });

      map.addListener("load", function () {
        const pts = [
          { lat: 28.55108, lng: 77.26913 },
          { lat: 28.55106, lng: 77.26906 },
          { lat: 28.55105, lng: 77.26897 },
          { lat: 28.55101, lng: 77.26872 },
          { lat: 28.55099, lng: 77.26849 },
          { lat: 28.55097, lng: 77.26831 },
          { lat: 28.55093, lng: 77.26794 },
          { lat: 28.55089, lng: 77.2676 },
          { lat: 28.55123, lng: 77.26756 },
          { lat: 28.55145, lng: 77.26758 },
          { lat: 28.55168, lng: 77.26758 },
          { lat: 28.55175, lng: 77.26759 },
          { lat: 28.55177, lng: 77.26755 },
          { lat: 28.55179, lng: 77.26753 },
        ];

        const polyline = new window.mappls.Polyline({
          map: map,
          paths: pts,
          strokeColor: "grey",
          strokeOpacity: 1.0,
          strokeWeight: 5,
          fitbounds: true,
        });

        setIsMapLoaded(true);
      });
    };

    const script = document.createElement("script");
    script.src =
      `https://apis.mappls.com/advancedmaps/api/${import.meta.env.VITE_ACCESS_TOKEN}/map_sdk?layer=vector&v=3.0&callback=initMap1`;
    script.defer = true;
    script.async = true;
    window.initMap1 = initMap1;
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
  );
};

export default PolylineMap;
