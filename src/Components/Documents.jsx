import React, { useRef } from 'react';
import './Documents.css';

const Documents = () => {
  const imagesRef = useRef([]);

  const handleImageClick = (index) => {
    // Remove the highlighted class from all images
    imagesRef.current.forEach(img => img.classList.remove('highlighted'));

    // Add the highlighted class to the clicked image
    imagesRef.current[index].classList.add('highlighted');
  };

  return (
    <div className="documents-section">
      {/* Section 1 Screenshots */}
      <h2>Section 1: FAQs</h2>

      <h3>Question 1: How to integrate Mappls SDKs?</h3>
      <img
        src="/assets/image.png"
        alt="Section 1 Question 1"
        ref={(el) => imagesRef.current[0] = el}
        onClick={() => handleImageClick(0)}
      />

      <h3>Question 2: How does it initialize Mappls SDKs?</h3>
      <img
        src="/assets/image (1).png"
        alt="Section 1 Question 2"
        ref={(el) => imagesRef.current[1] = el}
        onClick={() => handleImageClick(1)}
      />

      <h3>Question 3: How to show a popup on click of Map Marker?</h3>
      <img
        src="/assets/image (2).png"
        alt="Section 1 Question 3"
        ref={(el) => imagesRef.current[2] = el}
        onClick={() => handleImageClick(2)}
      />

      {/* Section 2 Screenshots */}
      <h2>Section 2: Maps and Markers</h2>

      <h3>Question 1: How to show Mappls Map?</h3>
      <img
        src="/assets/image (3).png"
        alt="Section 2 Question 1"
        ref={(el) => imagesRef.current[3] = el}
        onClick={() => handleImageClick(3)}
      />

      <h3>Question 2: Create a screen and render a map on it</h3>
      <img
        src="/assets/image (4).png"
        alt="Section 2 Question 2"
        ref={(el) => imagesRef.current[4] = el}
        onClick={() => handleImageClick(4)}
      />

      <h3>Question 3: How to set zoom level and center of Map?</h3>
      <img
        src="/assets/image (7).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[5] = el}
        onClick={() => handleImageClick(5)}
      />

      <h3>How to set zoom level and center of Map with Animation?</h3>
      <img
        src="/assets/image (5).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[6] = el}
        onClick={() => handleImageClick(6)}
      />

      <h3>How to plot a marker on Mappls Map?</h3>
      <img
        src="/assets/image (6).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[7] = el}
        onClick={() => handleImageClick(7)}
      />

      <h3>Add a custom marker and when we click on the marker then display an InfoWindow/pop-up.</h3>
      <img
        src="/assets/image (8).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[8] = el}
        onClick={() => handleImageClick(8)}
      />
      <img
        src="/assets/image (9).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[9] = el}
        onClick={() => handleImageClick(9)}
      />

      <h3>How to plot a polyline on Mappls Map?</h3>
      <img
        src="/assets/image (10).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[10] = el}
        onClick={() => handleImageClick(10)}
      />
      <img
        src="/assets/image (11).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[11] = el}
        onClick={() => handleImageClick(11)}
      />

      <h3>How to plot a polyline with custom color on Mappls Map?</h3>
      <img
        src="/assets/image (12).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[12] = el}
        onClick={() => handleImageClick(12)}
      />

      <h3>How to plot a polygon on Mappls Map?</h3>
      <img
        src="/assets/image (13).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[13] = el}
        onClick={() => handleImageClick(13)}
      />
      <img
        src="/assets/image (16).png"
        alt="Section 2 Question 3"
        ref={(el) => imagesRef.current[14] = el}
        onClick={() => handleImageClick(14)}
      />

      {/* Section 3 Screenshots */}
      <h3>How to plot a polygon with custom color?</h3>
      <img
        src="/assets/image (14).png"
        alt="Section 3 Question 1"
        ref={(el) => imagesRef.current[15] = el}
        onClick={() => handleImageClick(15)}
      />

      <h3>How to plot a polygon with opacity?</h3>
      <img
        src="/assets/image (15).png"
        alt="Section 3 Question 2"
        ref={(el) => imagesRef.current[16] = el}
        onClick={() => handleImageClick(16)}
      />

      <h2>Section 3: Plugins</h2>

      <h3>Question 1: How to get human readable address information at a location/coordinate?</h3>
      <img
        src="/assets/image (18).png"
        alt="Section 3 Question 1"
        ref={(el) => imagesRef.current[17] = el}
        onClick={() => handleImageClick(17)}
      />

      <h3>Question 2: How to get details of a place by its name? When you search for a place, it should display a marker on that location.</h3>
      <img
        src="/assets/image (17).png"
        alt="Section 3 Question 2"
        ref={(el) => imagesRef.current[18] = el}
        onClick={() => handleImageClick(18)}
      />
      <img
        src="/assets/image (19).png"
        alt="Section 3 Question 2"
        ref={(el) => imagesRef.current[19] = el}
        onClick={() => handleImageClick(19)}
      />
      <img
        src="/assets/image (22).png"
        alt="Section 3 Question 2"
        ref={(el) => imagesRef.current[20] = el}
        onClick={() => handleImageClick(20)}
      />

      <h3>Question 3: How to get road distance between two locations?</h3>
      <img
        src="/assets/image (20).png"
        alt="Section 3 Question 3"
        ref={(el) => imagesRef.current[21] = el}
        onClick={() => handleImageClick(21)}
      />

      <h3>How to get nearby places from a location of some specific category?</h3>
      <img
        src="/assets/image (21).png"
        alt="Section 3 Question 4"
        ref={(el) => imagesRef.current[22] = el}
        onClick={() => handleImageClick(22)}
      />
    </div>
  );
};

export default Documents;
