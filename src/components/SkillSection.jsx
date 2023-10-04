function SkillSection(props) {
  return (
    <>
      <h2>My Skills</h2>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

export default SkillSection;
