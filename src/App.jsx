import { Route, Routes } from "react-router-dom";
import "./App.css";
import PersonalInfo from "./Features/PersonalInfo";
import Layout from "./Features/Layout";
import SelectPlan from "./Features/Select Plan/SelectPlan";
import AddOns from "./Features/AddOns/AddOns";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PersonalInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOns />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
