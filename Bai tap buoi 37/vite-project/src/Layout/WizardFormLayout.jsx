import { Outlet } from "react-router-dom";
import { useWizardStore } from "../Store/wizardFormStore";

export default function WizardFormLayout() {
  const { step } = useWizardStore();
  return (
    <div className="bg-gray-900 h-screen text-white">
      <div className="flex w-[93%] mx-auto justify-between pt-4 items-center">
        <h1 className="text-[20px]">rhf-wizard</h1>
        <div className="flex items-center gap-4">
          <h2 className="text-[20px]">Step:{step} /4</h2>
          <img
            src="https://ih1.redbubble.net/image.4510452386.2478/st,small,507x507-pad,600x600,f8f8f8.u3.jpg"
            alt=""
            className="rounded-full w-12"
          />
        </div>
      </div>
      <hr className="bg-gray-600 my-3" />
      <Outlet />
    </div>
  );
}
