export const Input = ({
  placeholder,
  type = "text"
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        bg-surface
        border border-border
        rounded-xl
        px-4 py-3
        text-sm
        outline-none
        focus:border-primary
      "
    />
  );
};