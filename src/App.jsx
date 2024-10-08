import { Route, Routes } from "react-router-dom";
import "./App.css";
import PersonalInfo from "./Features/PersonalInfo";
import Layout from "./Features/Layout";
import SelectPlan from "./Features/Select Plan/SelectPlan";
import AddOnsMonthly from "./Features/AddOns/AddOnsMonthly";
import AddOnsYearly from "./Features/AddOns/AddOnsYearly";
import Summary from "./Features/Summary/Summary";
import Success from "./Features/Success/Success";



function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PersonalInfo />} />
            <Route path="/select-plan" element={<SelectPlan />} />
            <Route path="/add-ons" element={<AddOnsMonthly />} />
            <Route path="/add-ons-yearly" element={<AddOnsYearly />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
