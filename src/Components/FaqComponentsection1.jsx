import React, { useState } from "react";

const FAQs = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);
    const [showAnswer3, setShowAnswer3] = useState(false);

    return (
        <div className="faq-section">
            {/* Question 1 */}
            <div className="faq-item">
                <h3>How to integrate Mappls SDKs?</h3>
                <button onClick={() => setShowAnswer1(!showAnswer1)}>
                    {showAnswer1 ? "Hide" : "View"}
                </button>
                {showAnswer1 && (
                    <div>
                        <p>
                            To integrate Mappls SDKs, follow these steps:
                            <ol>
                                <li><a href="https://www.mappls.com" target="_blank" rel="noopener noreferrer">Sign Up on Mappls</a> to get started.</li>
                                <li>Obtain your <strong>license key from <a href="https://apis.mappls.com/console/"></a></strong> from the Mappls dashboard after signing up.</li>
                                <li>Visit the Mappls SDK documentation on <a href="https://github.com/mappls-api/mappls-web-maps" target="_blank" rel="noopener noreferrer">GitHub</a> for detailed instructions and examples.</li>
                            </ol>
                        </p>
                        {/* <p>
                            To include the Mappls JavaScript SDK in your project, you can use one of the following methods:
                            <br />
                            <b>CDN method:</b>
                            <pre>{`<script src="https://apis.mappls.com/advancedmaps/v3.0/map_sdk.js"></script>`}</pre>
                            <b>NPM method:</b>
                            <pre>{`npm install mappls-web-maps`}</pre>
                        </p> */}
                    </div>
                )}
            </div>

            {/* Question 2 */}
            <div className="faq-item">
                <h3>How does it initialize Mappls SDKs?</h3>
                <button onClick={() => setShowAnswer2(!showAnswer2)}>
                    {showAnswer2 ? "Hide" : "View"}
                </button>
                {showAnswer2 && (
                    <p>
                        To initialize the Mappls SDK, you need to use the API key provided
                        by Mappls. Example:
                        <pre>{`
mappls.initialize('YOUR_API_KEY', {
  map: true,
  libraries: ['places'],
  plugins: ['directions']
});
                        `}</pre>
                        Once initialized, you can create a map instance:
                        <pre>{`
const map = new mappls.Map({
  id: 'map',
  center: [28.61, 77.23],
  zoom: 10
});
                        `}</pre>
                    </p>
                )}
            </div>

            {/* Question 3 */}
            <div className="faq-item">
                <h3>How to show a popup on click of Map Marker?</h3>
                <button onClick={() => setShowAnswer3(!showAnswer3)}>
                    {showAnswer3 ? "Hide" : "View"}
                </button>
                {showAnswer3 && (
                    <p>
                        You can show a popup on the click of a map marker using the Mappls
                        `Marker` and `Popup` components. Here’s an example:
                        <pre>{`
const marker = new mappls.Marker({
  map: map,
  position: { lat: 28.61, lng: 77.23 }
});

marker.on('click', () => {
  const popup = new mappls.Popup({
    content: 'This is a marker popup!'
  });
  popup.open(map, marker.getPosition());
});
                        `}</pre>
                    </p>
                )}
            </div>
        </div>
    );
};

export default FAQs;
