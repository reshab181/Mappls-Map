import React, { useState } from 'react';
import HomeMap from './HomeMap';  // Import the HomeMap component
import MapComponent from './MapComponent';
import AnimationZoom from './AnimationZoom';
import Marker from './Marker';
import MarkerWithPopup from './MarkeronPopup';
import PolylineMap from './PolylineMap';
import CustomColorPolyMap from './CustomColorPolymap';
import PolygonMap from './Polygon';
import CustomPolygon from './CustomPolygon';
import OpacityPolygon from './Opacitypolygon';

const SectionTwo = () => {
  const questions = [
    "How to show Mappls Map?",
    "Create a screen and render a map on it.",
    "How to set zoom level and center of Map?",
    "How to set zoom level and center of Map with Animation?",
    "How to plot a marker on Mappls Map?",
    "Add a custom marker and when we click on the marker then display an InfoWindow/pop-up.",
    "How to plot a polyline on Mappls Map?",
    "How to plot a polyline with custom color on Mappls Map?",
    "How to plot a polygon on Mappls Map?",
    "How to plot a polygon with custom color?",
    "How to plot a polygon with opacity?",
  ];

  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {questions.map((question, index) => (
        <div className="faq-item" key={index}>
          <h3>{question}</h3>
          <button onClick={() => toggleAnswer(index)}>
            {visibleAnswerIndex === index ? 'Hide' : 'View'}
          </button>
          {visibleAnswerIndex === index && (
            <div>
              {/* Directly show the document for the first question */}
              {index === 0 && (
                <div className="document-section">
                  <h2>Document for "How to show Mappls Map?"</h2>
                  <pre>
                    <code>
                      {`
import { mappls, mappls_plugin } from "mappls-web-maps";
import { useEffect, useRef, useState } from "react";

const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();

const App = () => {
  const mapRef = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const loadObject = { 
    map: true, 
    layer: 'raster', 
    version: '3.0', 
    libraries: ['polydraw'], 
    plugins:['direction'] 
  };

  useEffect(() => {
    mapplsClassObject.initialize("--------Token-------", loadObject, () => {
      const newMap = mapplsClassObject.Map({
        id: "map",
        properties: {
          center: [28.633, 77.2194],
          zoom: 4,
        },
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

  return (
    <div
      id="map"
      style={{ width: "100%", height: "99vh", display: "inline-block" }}
    >
      {isMapLoaded}
    </div>
  );
};

export default App;
                      `}
                    </code>
                  </pre>
                </div>
              )}
              {index === 1 && <HomeMap />} 
              {index === 2 && <MapComponent />}
              {index === 3 && <AnimationZoom />}
              {index === 4 && <Marker />}
              {index === 5 && <MarkerWithPopup />}
              {index === 6 && <PolylineMap />}
              {index === 7 && <CustomColorPolyMap />}
              {index === 8 && <PolygonMap />}
              {index === 9 && <CustomPolygon />}
              {index === 10 && <OpacityPolygon />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
