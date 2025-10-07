import type { ReactNode } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

interface Field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

interface ButtonConfig {
  text: string;
  color?: "blue" | "gray";
  onClick?: () => void;
  type?: "button" | "submit";
}

interface RegistrationFormProps {
  title: string;
  fields: Field[];
  buttons: ButtonConfig[];
  footer?: ReactNode;
  onSubmit?: (e: React.FormEvent) => void;
  showPolicy?: boolean;
}

export default function RegistrationForm({ title, fields, buttons, footer, onSubmit, showPolicy = false }: RegistrationFormProps) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-1 sm:flex-none sm:h-[196px] md:hidden"></div>

      <form onSubmit={onSubmit} className="
        bg-white w-full py-6 px-5 shadow-none
        rounded-t-3xl rounded-b-none mx-auto
        transition-all duration-300
        sm:mt-auto
        md:w-[536px] md:py-[56px] md:px-[68px]
        md:rounded-[48px] md:my-auto
        md:shadow-[0px_4px_16px_0px_#00000014,0px_0px_16px_0px_#00000014]
      ">
        <h2 className="
          text-[32px] leading-[36px] text-center 
          text-[#1D2023] font-semibold mb-8 
          md:text-[44px] md:leading-[48px]
        ">
          {title}
        </h2>

        {fields.map((f) => (
          <Input
            key={f.name}
            label={f.label}
            type={f.type}
            placeholder={f.placeholder}
            value={f.value}
            onChange={f.onChange}
            error={f.error}
          />
        ))}

        {showPolicy && (
          <label className="flex items-start mt-1 gap-2 text-sm leading-[20px] text-gray-600">
            <input
              type="checkbox"
              className="w-5 h-5 mt-1 accent-blue-500 rounded-xl cursor-pointer"
              required
            />
            <span className="mt-1 text-[#626C77]">
              Я подтверждаю согласие с{" "}
              <a href="#" className="text-blue-500 hover:underline">
                политикой конфиденциальности
              </a>
            </span>
          </label>
        )}

        <div className="flex flex-col gap-3 mt-5 mb-4">
          {buttons.map((b, idx) => (
            <Button key={idx} text={b.text} color={b.color} onClick={b.onClick} type={b.type} />
          ))}
        </div>

        {footer && <div className="text-center">{footer}</div>}
      </form>
    </div>
  );
}