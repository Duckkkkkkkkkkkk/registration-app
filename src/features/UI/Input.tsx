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
    <div className="mb-2">
      <label className="block text-slate-500 text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          rounded-xl w-full p-2 bg-gray-100 
          border border-[#BCC3D0]/80
          hover:border-[#BCC3D0]/100
          focus:border-blue-500
          transition-colors
              outline-none
        "
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}