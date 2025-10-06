import { useAppSelector } from "../../hooks/useAppDispatch";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";

export default function RegistrationPage() {
  const step = useAppSelector((state) => state.registration.step);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
    </div>
  );
}