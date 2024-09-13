import React, { useEffect ,useState} from 'react';

const InfoWindowComponent = () => {
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const initMap = () => {
      const map = new window.mappls.Map('map', {
        center: [28.61, 77.23],
        zoomControl: true,
        location: true,
      });

      map.addListener('load', () => {
        new window.mappls.Marker({
          map: map,
          position: { lat: 28.519467, lng: 77.223150 },
          fitbounds: true,
          popupHtml: '<div>MapmyIndia</div>',
        });
        setLoading(false)
      });
    };

    
    const script = document.createElement('script');
    script.src =
      `https://apis.mappls.com/advancedmaps/api/${import.meta.env.VITE_ACCESS_TOKEN}/map_sdk?layer=vector&v=3.0&callback=initMap`;
    script.defer = true;
    script.async = true;
    window.initMap = initMap;
    document.body.appendChild(script);

  
    return () => {
      document.body.removeChild(script);
      delete window.initMap; 
    };
  }, []);

  return(
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading Map...</p>
        </div>
      )}
      <div id="map" style={{ width: "99%", height: "100%" }}></div>
    </div>
  )
};

export default InfoWindowComponent;
