import React, { useEffect, useRef, useState, useContext } from "react";
import { TokenContext } from "./TokenProvider";
import { Grid } from 'react-loader-spinner';

const MapWithDirections = () => {
  const token = useContext(TokenContext);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapRef = useRef(null);
  let directionPlugin = null;

  useEffect(() => {
    // if (token) {
      const initMap1 = () => {
        const map = new window.mappls.Map(mapRef.current, {
          center: [28.09, 78.3],
          zoom: 5,
        });

        map.addListener("load", function () {
          const directionOption = {
            map: map,
            divWidth: "350px",
            isDraggable: false,
            end: {
              label: "Mapmyindia Ranchi",
              geoposition: "23.3556,85.3591",
            },
            Profile: ["driving", "biking", "trucking", "walking"],
          };

          window.mappls.direction(directionOption, function (data) {
            directionPlugin = data;
            console.log("Direction Plugin Data:", directionPlugin);
          });

          setIsMapLoaded(true); // Set map as loaded
        });
      };

      // Load the Mappls scripts
      const script1 = document.createElement("script");
      script1.src = `https://apis.mappls.com/advancedmaps/api/${import.meta.env.VITE_ACCESS_TOKEN}/map_sdk?layer=vector&v=3.0&callback=initMap1`;
      script1.async = true;

      const script2 = document.createElement("script");
      script2.src = `https://apis.mappls.com/advancedmaps/api/${import.meta.env.VITE_ACCESS_TOKEN}/map_sdk_plugins?v=3.0`;
      script2.async = true;

      document.body.appendChild(script1);
      document.body.appendChild(script2);

      window.initMap1 = initMap1;

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
        // Clean up map instance if needed
        if (mapRef.current && mapRef.current.remove) {
          mapRef.current.remove();
        }
      };
    // }
  }, []);

  return (
    <div>
      <div
        ref={mapRef}
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
              height: '100vh'
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
    </div>
  );
};

export default MapWithDirections;
