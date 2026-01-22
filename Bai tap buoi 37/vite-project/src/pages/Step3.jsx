import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useWizardStore } from "../Store/wizardFormStore";

export default function step3() {
  const navigate = useNavigate();
  const { setStep3Data, goToStep } = useWizardStore();
  const ref = useRef();
  const handleSubmit = (data) => {
    ref.current.innerText = "Loading....";
    setTimeout(() => {
      navigate("/step4");
      setStep3Data({
        asyncConfirmed: true,
        finishedAt: Date.now(),
      });
    }, 2000);
  };
  return (
    <div className="w-[70%] m-auto mt-30">
      <h1 className="font-bold text-[30px]">Async</h1>
      <p>
        Pressing "Next" does async operation that take 2 seconds before we
        proceed to the next step
      </p>
      <div className="mt-4">
        <button
          className="px-2 py-1 bg-green-900 text-white outline-none disabled:bg-gray-300 mr-3"
          type="button"
          onClick={() => (navigate("/step2"), goToStep(2))}
        >
          Previous
        </button>
        <button
          ref={ref}
          className="px-2 py-1 bg-green-900 text-white outline-none"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
