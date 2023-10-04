import React from "react";

function InterestSection(props) {
  return (
    <>
      <h2>My Interests:</h2>
      <ul>
        {props.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
    </>
  );
}

export default InterestSection;
