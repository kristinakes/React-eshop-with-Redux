import { useState } from "react";

function FloatingLabelInput({type, name, value, errors, register, validationSchema, required, disabled, children}) {
    const [activeInput, setActiveInput] = useState(false);

  return (
    <div className="relative text-black">
      <input
        className={[
          "border-none w-96 rounded bg-slate-100 text-xl transition-all duration-200 ease-in-out mt-4 py-4 ",
          activeInput ? "pt-2" : "",
        ].join(" ")}
        id={name}
        name={name}
        type={type}
        {...register(name, validationSchema)}
        required={required}
        disabled={disabled}
        onChange={(e) => {
          setActiveInput(!!e.target.value);
        }}
        value={value && value}
      />
      <label
        className={[
          "absolute top-3 left-1 flex items-center text-slate-600 pb-3 transition-all duration-200 ease-in-out",
          activeInput ? "text-sm" : "text-base",
        ].join(" ")}
        htmlFor={name}
      >
        {children}
        {required && "*"}
      </label>
      {errors && errors[name]?.type === "required" && (
        <p className="text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );
}
export default FloatingLabelInput