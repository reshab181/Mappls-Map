// import React, { useState } from 'react';
// import HomeMap from './HomeMap';  // Import the HomeMap component

// const SectionTwo = () => {
//   const questions = [
//     "How to show Mappls Map?",
//     "Create a screen and render a map on it.",
//     "How to set zoom level and center of Map?",
//     "How to set zoom level and center of Map with Animation?",
//     "How to plot a marker on Mappls Map?",
//     "Add a custom marker and when we click on the marker then display an InfoWindow/pop-up.",
//     "How to plot a polyline on Mappls Map?",
//     "How to plot a polyline with custom color on Mappls Map?",
//     "How to plot a polygon on Mappls Map?",
//     "How to plot a polygon with custom color?",
//     "How to plot a polygon with opacity?",
//   ];

//   const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

//   const toggleAnswer = (index) => {
//     setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-section">
//       {questions.map((question, index) => (
//         <div className="faq-item" key={index}>
//           <h3>{question}</h3>
//           <button onClick={() => toggleAnswer(index)}>
//             {visibleAnswerIndex === index ? 'Hide' : 'View'}
//           </button>
//           {visibleAnswerIndex === index && (
//             <div>
//               {index === 0 ? (
//                 <HomeMap />  // Show HomeMap component for the first question
//               ) : (
//                 <p>
//                   {/* You can insert the detailed answer here */}
//                   This is the answer to "{question}".
//                 </p>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionTwo;

import React, { useState } from 'react';
import MapWithDirections from './DirectionPlugin';
import MapWithNearbySearch from './NearBySerach';
import PlaceSearch from './PlaceSearch';
import HumanRedableInformation from './HumanReadableInformation';


const SectionTwo = () => {
  const questions = [
   "How to get human readable address information at a location/coordinate?",
   "How to get details of a place by its name? When you search for a place, it should display a marker on that location.",

,
"How to get road distance between two locations?",
"How to get nearby places from a location of some specific category?"

  ];

  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);
  const [showAppDoc, setShowAppDoc] = useState(false);

  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  const toggleAppDocVisibility = () => {
    setShowAppDoc(!showAppDoc);
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
            
            {index === 0 && <HumanRedableInformation/>}
              {index === 1 && <PlaceSearch/>}
              {index === 3 && <MapWithDirections/>}
              {index === 4 && <MapWithNearbySearch/>}
             
             {/* {index===5 && </>} */}
              {index !== 0 && index == 1 &&index == 2 &&(
                <p>
                  {/* You can insert the detailed answer here */}
                  This is the answer to "{question}".
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;

