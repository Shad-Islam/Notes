import PersonalInfo from "./PersonalInfo";
import SkillSection from "./SkillSection";
import InterestSection from "./InterestSection";

function BioData(props) {
  return (
    <>
      <PersonalInfo
        name="Shad"
        age={22}
        grnder="male"
        email="shadislam@gmail.com"
        phone="12345"
        address="123 , Motijheel"
        country="Bangladesh"
      />
      <SkillSection skills={["React", "Redux", "JS"]} />
      <InterestSection interests={["Sports", "theme Development"]} />
    </>
  );
}

export { BioData };
