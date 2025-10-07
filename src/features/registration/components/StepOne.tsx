import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { setEmail, nextStep } from "../registrationSlice";
import RegistrationForm from "./RegistrationForm";

export default function StepOne() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((s) => s.users);
  const { email } = useAppSelector((s) => s.registration);
  const [error, setError] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setError("Введите email");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Некорректный email");

    const userExists = users.some((u) => u.email.toLowerCase() === email.toLowerCase());
    if (userExists) return setError("Пользователь с таким email уже существует");
    dispatch(nextStep());
  };

  return (
    <RegistrationForm
      title="Регистрация"
      fields={[
        {
          name: "email",
          label: "Корпоративный e-mail",
          placeholder: "Введи почту",
          value: email,
          onChange: (v) => {
            dispatch(setEmail(v));
            if (error) setError("");
          },
          error,
        },
      ]}
      buttons={[
        { text: "Продолжить", color: "blue", type: "submit" },
        { text: "Войти", color: "gray", type: "button" },
      ]}
      showPolicy={true}
      footer={
        <>
          <p className="text-slate-500 text-xs">Возник вопрос или что-то сломалось?</p>
          <p className="text-blue-500 text-xs cursor-pointer hover:underline">Вступай в чат и задавай вопрос</p>
        </>
      }
      onSubmit={handleNext}
    />
  );
}