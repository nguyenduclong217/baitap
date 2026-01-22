import { Route, Routes } from "react-router-dom";
import WizardFormLayout from "./Layout/WizardFormLayout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import ProtectedStep from "./Layout/ProtectedStep";
// import from "./components/ProtectedStep";

export default function App() {
  return (
    <Routes>
      <Route element={<WizardFormLayout />}>
        <Route index element={<Step1 />} />

        <Route
          path="step2"
          element={
            <ProtectedStep stepRequired={2}>
              <Step2 />
            </ProtectedStep>
          }
        />

        <Route
          path="step3"
          element={
            <ProtectedStep stepRequired={3}>
              <Step3 />
            </ProtectedStep>
          }
        />

        <Route
          path="step4"
          element={
            <ProtectedStep stepRequired={4}>
              <Step4 />
            </ProtectedStep>
          }
        />
      </Route>
    </Routes>
  );
}
