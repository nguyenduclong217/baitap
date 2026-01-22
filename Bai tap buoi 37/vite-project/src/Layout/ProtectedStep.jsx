import { Navigate } from "react-router-dom";
import { useWizardStore } from "../Store/wizardFormStore";

export default function ProtectedStep({ stepRequired, children }) {
  const step = useWizardStore((state) => state.step);

  if (step < stepRequired) {
    // map step -> route
    const redirectMap = {
      1: "/",
      2: "/step2",
      3: "/step3",
    };

    return <Navigate to={redirectMap[step] || "/"} replace />;
  }

  return children;
}
