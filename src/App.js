import "./App.css";
import { Test } from "./components/test";
import { BioData } from "./components/BioData";

function App() {
  return (
    <>
      <Test name="everyone" />
      <BioData
        name="Shad"
        age={22}
        grnder="male"
        email="shadislam@gmail.com"
        phone="12345"
        Address="123 , Motijheel"
        country="Bangladesh"
      />
    </>
  );
}

export default App;
