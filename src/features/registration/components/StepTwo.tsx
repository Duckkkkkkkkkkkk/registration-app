import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { setName, setPassword, prevStep, reset } from "../registrationSlice";
import { addUser } from "../../users/usersSlice";

export default function StepTwo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { email, name, password } = useAppSelector((s) => s.registration);
  const [error, setError] = useState("");

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !password) return setError("Все поля обязательны");
    if (password.length < 6) return setError("Пароль слишком короткий");

    dispatch(addUser({ email, name, password }));
    dispatch(reset());
    navigate("/users");
  };

  return (
    <form onSubmit={handleFinish} className="bg-white p-6 rounded-2xl shadow w-96">
      <h2 className="text-2xl font-semibold mb-4">Шаг 2 — Имя и пароль</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        className="border rounded w-full p-2 mb-3"
        placeholder="Имя"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
        className="border rounded w-full p-2 mb-3"
        placeholder="Пароль"
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => dispatch(prevStep())}
          className="px-4 py-2 border rounded"
        >
          Назад
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Завершить
        </button>
      </div>
    </form>
  );
}