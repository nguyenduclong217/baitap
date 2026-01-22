import React from "react";
import { useWizardStore } from "../Store/wizardFormStore";
import { useNavigate } from "react-router-dom";

export default function Step4() {
  // const step1Data = useWizardStore((state) => state.step1Data);
  // const step2Data = useWizardStore((state) => state.step2Data);
  const { step1Data, step2Data, step3Data, goToStep } = useWizardStore();
  const finalData = {
    ...step1Data,
    ...step2Data,
    ...step3Data,
  };
  const navigate = useNavigate();
  console.log(finalData);
  return (
    <div className="w-[70%] m-auto mt-30">
      <h1>Congratulations</h1>
      <h3>You did it 🎉</h3>
      <p>Here your input:</p>
      <pre className="text-white bg-black">
        {`
        {
            "firstName": "${finalData.firstName}",
            "lastName": "${finalData.lastName}",
            "age": "${finalData.age}",
            "email": "${finalData.email}",
            "username": "${finalData.userName}"
        }
        `}
      </pre>
      <button
        className="px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300 mr-3"
        type="button"
        onClick={() => (navigate("/step3"), goToStep(3))}
      >
        Previous
      </button>
    </div>
  );
}
