function PersonalInfo(props) {
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

export default PersonalInfo;
