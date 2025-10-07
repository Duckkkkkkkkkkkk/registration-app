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
  const [errors, setErrors] = useState<{ name?: string; password?: string }>({});

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; password?: string } = {};

    if (!name) newErrors.name = "Имя обязательно";
    if (!password) newErrors.password = "Пароль обязателен";
    else if (password.length < 6) newErrors.password = "Пароль слишком короткий";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    dispatch(addUser({ email, name, password }));
    dispatch(reset());
    navigate("/users");
  };

  return (
    <RegistrationForm
      title="Регистрация"
      fields={[
        {
          name: "name",
          label: "Имя",
          placeholder: "Введи имя",
          value: name,
          onChange: (v) => {
            dispatch(setName(v));
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          },
          error: errors.name,
        },
        {
          name: "password",
          label: "Пароль",
          type: "password",
          placeholder: "Введи пароль",
          value: password,
          onChange: (v) => {
            dispatch(setPassword(v));
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          },
          error: errors.password,
        },
      ]}
      buttons={[
        { text: "Завершить", color: "blue", type: "submit" },
        { text: "Назад", color: "gray", type: "button", onClick: () => dispatch(prevStep()) },
      ]}
      showPolicy={false}
      footer={
        <>
          <p className="text-slate-500 text-xs">Возник вопрос или что-то сломалось?</p>
          <p className="text-blue-500 text-xs cursor-pointer hover:underline">Вступай в чат и задавай вопрос</p>
        </>
      }
      onSubmit={handleFinish}
    />
  );
}