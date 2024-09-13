import React, { useEffect, useRef, useState } from "react";

const MapWithNearbySearch = () => {
  const mapRef = useRef(null);
  const nearbySearchRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initMap1 = () => {
      const map = new window.mappls.Map(mapRef.current, {
        center: [28.09, 78.3],
        zoom: 5,
      });

      map.addListener("load", function () {
        const options = {
          divId: nearbySearchRef.current.id,
          map: map,
          keywords: "atm",
          refLocation: "28.632735,77.219696",
          fitbounds: true,
          icon: {
            url: "https://apis.mappls.com/map_v3/1.png",
          },
          click_callback: function (d) {
            if (d) {
              const l = `Name: ${d.placeName}\nAddress: ${d.placeAddress}\neLoc: ${d.eLoc}`;
              alert(l);
            }
          },
        };

        window.mappls.nearby(options, function (data) {
          console.log("Nearby Search Result:", data);
        });

     
        setLoading(false);
      });
    };

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
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
     {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading Map...</p>
        </div>
      )}
      <div
        id="nearby_search"
        ref={nearbySearchRef}
        style={{
          margin: "5px",
          width: "20%",
          height: "250px",
          overflowY: "auto",
          borderRadius: "10px",
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 999,
          backgroundColor: "#fff",
        }}
      ></div>
      <div
        id="map"
        ref={mapRef}
        style={{ width: "75vw", height: "100%" }}
      ></div>
    </div>
  );
};

// Loader style


export default MapWithNearbySearch;
