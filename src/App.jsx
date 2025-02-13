import { HashRouter as Router, Routes, Route } from "react-router-dom";
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";
import Nav from "./component/Nav";
function App() {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
        <Route path="/" element={<FirstStep />} />
        <Route path="/step-2" element={<SecondStep />} />
        <Route path="/step-3" element={<ThirdStep />} />
      </Routes>
    </Router>
    </>  
  );
}

export default App;
