import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { setEmail, nextStep } from "../registrationSlice";

export default function StepOne() {
  const dispatch = useAppDispatch();
  const { email } = useAppSelector((s) => s.registration);
  const [error, setError] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setError("Введите email");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Некорректный email");
    dispatch(nextStep());
  };

  return (
    <form onSubmit={handleNext} className="bg-white p-6 rounded-2xl shadow w-96">
      <h2 className="text-2xl font-semibold mb-4">Шаг 1 — Email</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(setEmail(e.target.value))}
        className="border rounded w-full p-2 mb-3"
        placeholder="Введите корпоративный email"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
        Далее
      </button>
    </form>
  );
}