import { useEffect, useState } from "react";

import Buttons from "@/components/modules/Buttons";
import TextSection from "../modules/TextSection";

function SinglePageApp() {
  const [step, setStep] = useState(JSON.parse(localStorage.getItem("step")));

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);
  return (
    <div>
      <Buttons step={step} setStep={setStep} />
      <TextSection step={step} setStep={setStep} />
    </div>
  );
}

export default SinglePageApp;
