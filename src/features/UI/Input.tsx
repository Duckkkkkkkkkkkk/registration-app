interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}

export default function Input({ label, type = "text", placeholder, value, onChange, error }: InputProps) {
  return (
    <div className=" relative mb-5">
      <label className="block text-slate-500 text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          rounded-xl w-full p-4 bg-gray-100 
          border border-[#BCC3D0]/80
          hover:border-[#BCC3D0]/100
          focus:border-blue-500
          transition-all duration-200 outline-none
          ${error ? "border-red-500" : ""}
        `}
      />
      {error && <p className="absolute text-red-500 text-xs left-0 -bottom-4">{error}</p>}
    </div>
  );
}