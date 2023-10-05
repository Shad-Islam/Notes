import "./App.css";
import { BioData } from "./components/BioData";
import PersonalInfo from "./components/PersonalInfo";
import SkillSection from "./components/SkillSection";
import InterestSection from "./components/InterestSection";

function App() {
  return (
    <>
      <BioData>
        <PersonalInfo
          name="Shad"
          age={22}
          grnder="male"
          email="shadislam@gmail.com"
          phone="12345"
          address="123 , Motijheel"
          country="Bangladesh"
        />
        <SkillSection skills={["HTML", "CSS", "JS",'C',"JAVA"]} />
        <InterestSection interests={["Sports", "Web Design"]} />
      </BioData>
    </>
  );
}

export default App;
