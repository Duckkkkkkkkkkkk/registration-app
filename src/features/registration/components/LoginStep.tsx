import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useAppDispatch";
import { setStep } from "../registrationSlice";
import RegistrationForm from "./RegistrationForm";

export default function LoginStep() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const users = useAppSelector((s) => s.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Введите email";
    if (!password) newErrors.password = "Введите пароль";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const user = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!user) {
      setErrors({ email: "Неверный email или пароль", password: "Неверный email или пароль" });
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    navigate("/users");
  };

  const handleBackToRegistration = () => {
    dispatch(setStep(1));
  };

  const handleEmailChange = (v: string) => {
    setEmail(v);
    if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
  };

  const handlePasswordChange = (v: string) => {
    setPassword(v);
    if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
  };

  return (
    <RegistrationForm
      title="Вход"
      fields={[
        {
          name: "email",
          label: "Корпоративный e-mail",
          placeholder: "Введи почту",
          value: email,
          onChange: handleEmailChange,
          error: errors.email,
        },
        {
          name: "password",
          label: "Пароль",
          type: "password",
          placeholder: "Введи пароль",
          value: password,
          onChange: handlePasswordChange,
          error: errors.password,
        },
      ]}
      buttons={[
        { text: "Войти", color: "blue", type: "submit" },
        { text: "Регистрация", color: "gray", type: "button", onClick: handleBackToRegistration },
      ]}
      footer={
        <>
          <p className="text-slate-500 text-xs">Возник вопрос или что-то сломалось?</p>
          <p className="text-blue-500 text-xs cursor-pointer hover:underline">Вступай в чат и задавай вопрос</p>
        </>
      }
      onSubmit={handleLogin}
    />
  );
}