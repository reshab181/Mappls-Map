import React, { useEffect, useRef, useState } from "react";
import { Grid } from 'react-loader-spinner';  // Import the Grid Loader Spinner
// import '../App.css';

const PlaceSearch = () => {
  const mapRef = useRef(null);
  const searchInputRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  let marker = null;

  useEffect(() => {
    window.initMap1 = () => {
      const map = new window.mappls.Map(mapRef.current, {
        center: [28.09, 78.3],
        zoom: 5,
      });

      map.addListener("load", function () {
        const optionalConfig = {
          region: "IND",
          height: 300,
        };

        new window.mappls.search(searchInputRef.current, optionalConfig, callback);

        function callback(data) {
          alert("Data: " + JSON.stringify(data, null, 2));
          console.log(data);

          if (data && data.length > 0) {
            const dt = data[0];
            if (!dt) return;

            const eloc = dt.eLoc;
            const place = `${dt.placeName}, ${dt.placeAddress}`;

            // Remove previous marker
            if (marker) {
              marker.remove();
            }

            // Add new marker
            window.mappls.pinMarker(
              {
                map: map,
                pin: eloc,
                popupHtml: place,
                popupOptions: {
                  openPopup: true,
                },
              },
              function (data) {
                marker = data;
                marker.fitbounds();
              }
            );
          }
        }

      setIsMapLoaded(true)
      });
    };

    const script1 = document.createElement("script");
    script1.src = `https://apis.mappls.com/advancedmaps/api/1e40b15f-3a13-4bf6-a4ed-ba974c78eba4/map_sdk?layer=vector&v=3.0&callback=initMap1`;
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = `https://apis.mappls.com/advancedmaps/api/1e40b15f-3a13-4bf6-a4ed-ba974c78eba4/map_sdk_plugins?v=3.0`;
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
       <div style={{ width: "75vw", height: "100vh", position: "relative" }}>
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
            color="#333"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperClass="grid-wrapper"
          />
          <div style={{ fontWeight: '500', fontSize: '14px', color: 'white' }}>
            Loading map...
          </div>
          </div>
          
       
        
      )}
      <div
        id="map"
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
      ></div>
      <input
        type="text"
        id="auto"
        ref={searchInputRef}
        name="auto"
        className="search-outer form-control as-input"
        placeholder="Search places or eLoc's..."
        required
        spellCheck="false"
        style={{
          width: "300px",
          position: "absolute",
          zIndex: 999,
          fontSize: "15px",
          padding: "10px",
          border: "1px solid #ddd",
          outline: "none",
          top: "10px",
          borderRadius: "10px",
          margin: "4px",
        }}
      />
    </div>
    
  );
};

export default PlaceSearch;
