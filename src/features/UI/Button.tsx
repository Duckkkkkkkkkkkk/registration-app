interface ButtonProps {
  text: string;
  color?: "blue" | "gray";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({ text, color = "blue", onClick, type = "button", className }: ButtonProps) {
  const colors: Record<string, string> = {
    blue: "bg-blue-500 text-white hover:bg-blue-300 active:bg-blue-700",
    gray: "bg-gray-200 text-gray-900 hover:bg-gray-100 active:bg-gray-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        w-full rounded-xl px-9 py-[22px]
        flex items-center justify-center 
        font-montserrat font-bold text-xs uppercase tracking-[0.05em]
        ${colors[color]} ${className || ""}
      `}
    >
      {text}
    </button>
  );
}