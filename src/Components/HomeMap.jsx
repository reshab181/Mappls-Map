import { mappls, mappls_plugin } from 'mappls-web-maps';
import { useEffect, useRef, useState } from 'react';
// import './HomeMap.css';  
import { Grid } from 'react-loader-spinner';

const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();

const HomeMap = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [showMap, setShowMap] = useState(true); // Set to true to show the map by default

  const loadObject = {
    map: true,
    layer: 'raster',
    version: '3.0',
    libraries: ['polydraw'],
    plugins: ['direction']
  };

  useEffect(() => {
    if (showMap) {
      mapplsClassObject.initialize(import.meta.env.VITE_ACCESS_TOKEN, loadObject, () => {
        const newMap = mapplsClassObject.Map({
          id: "map",
          properties: {
            center: [28.544, 77.5454],
            draggable: true,
            zoom: 4,
            minZoom: 8,
            maxZoom: 15,
            backgroundColor: '#fff',
            traffic: true,
            geolocation: true,
            disableDoubleClickZoom: true,
            fullscreenControl: true,
            scrollWheel: true,
            scrollZoom: true,
            rotateControl: true,
            scaleControl: true,
            zoomControl: true,
            clickableIcons: true,
            indoor: true,
            indoor_position: 'bottom-left',
          },
        });

        // Add a marker
        // mapplsClassObject.Marker({
        //   map: newMap,
        //   position: {
        //     "lat": 28.519467,
        //     "lng": 77.223150
        //   },
        //   fitbounds: true,
        //   icon_url: 'https://apis.mapmyindia.com/map_v3/1.png'
        // });

        newMap.on("load", () => {
          setIsMapLoaded(true);
        });

        mapRef.current = newMap;
      });
    }
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [showMap]);

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
    </div>
  </>
  );
};

export default HomeMap;
