export const Button = ({
  children,
  variant = "primary",
  full = true,
  onClick
}) => {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "border border-border text-text bg-transparent"
  };
  return (
    <button
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${full ? "w-full" : ""}
        py-3 rounded-xl font-semibold
        transition hover:opacity-90
      `}
    >
      {children}
    </button>
  );
};