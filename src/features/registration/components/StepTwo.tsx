import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { setName, setPassword, prevStep, reset } from "../registrationSlice";
import { addUser } from "../../users/usersSlice";
import RegistrationForm from "./RegistrationForm";

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
    <RegistrationForm
      title="Регистрация"
      fields={[
        { name: "name", label: "Имя", placeholder: "Введи имя", value: name, onChange: (v) => dispatch(setName(v)), error },
        { name: "password", label: "Пароль", type: "password", placeholder: "Введи пароль", value: password, onChange: (v) => dispatch(setPassword(v)), error },
      ]}
      buttons={[
        { text: "Завершить", color: "blue", type: "submit" },
        { text: "Назад", color: "gray", type: "button", onClick: () => dispatch(prevStep()) },
      ]}
      showPolicy={false}
      footer={
        <>
          <p className="text-slate-500 text-xs">Возник вопрос или что-то сломалось?</p>
          <p className="text-blue-500 text-xs">Вступай в чат и задавай вопрос</p>
        </>
      }
      onSubmit={handleFinish}
    />
  );
}