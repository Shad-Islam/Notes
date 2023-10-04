// const BioData = (props) => {
//   console.log(props, "props");
//   return (
//     <div className="bio-data">
//       {/* <PersonalInfo /> */}
//       <div className="personal-info">
//         <h1>Bio Data of {props.name}</h1>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Gender: {props.gender}</p>
//         <p>Email: {props.email}</p>
//         {props.phone && <p>Phone: {props.phone}</p>}
//         <p>Address: {props.address}</p>
//         <p>Country: {props.country}</p>
//       </div>
//       <div className="skills">
//         <h2>My Skills</h2>
//         <ul>
//           {props.skills.map((skill) => (
//             <li key={skill}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="interests">
//         <h2>My Interests:</h2>
//         <ul>
//           {props.interests.map((interest) => (
//             <li key={interest}>{interest}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
function BioData(props) {
  return (
    <>
      <h1>Bio Data of Shad</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Address: {props.address}</p>
      <p>Country: {props.country}</p>
    </>
  );
}

export { BioData };
