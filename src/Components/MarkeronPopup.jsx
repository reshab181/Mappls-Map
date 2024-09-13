import { useEffect, useRef, useState } from "react";
import { Grid } from 'react-loader-spinner';

const MarkerWithPopup = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://apis.mappls.com/advancedmaps/api/${import.meta.env.VITE_ACCESS_TOKEN}/map_sdk?layer=vector&v=3.0&callback=initMap`;
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    window.initMap = () => {
      if (window.mappls) {
        const map = new window.mappls.Map(mapRef.current, {
          center: [28.61, 77.23],
          zoomControl: true,
          location: true,
          zoom: 12
        });

        new window.mappls.Marker({
          map: map,
          position: { lat: 28.519467, lng: 77.223150 },
          fitbounds: true,
          popupHtml: `
            <div style="max-height:150px;min-width:200px;overflow-y: scroll;">
              <h2 style="font: bold 16px arial, helvetica;">MapMyIndia</h2>
              <p style="font: italic 14px/20px times;">Building looks like:</p>
              <p>MapmyIndia Head Office, Delhi</p>
              <a href="https://www.mappls.com">Mappls Maps</a>
            </div>`
        });

        setIsMapLoaded(true);
      }
    };

    loadMapScript();
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

export default MarkerWithPopup;
