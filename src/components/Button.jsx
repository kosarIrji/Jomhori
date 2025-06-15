export const Button = ({ children, onClick, variant = "default", isActive = false }) => {
  const base = "px-2 py-0 rounded-xl  text-base font-medium transition h-10 hover:text-white";
  const variants = {
    default: "text-white bg-amber-600 hover:bg-amber-600",
    outline: "border border-amber-600 bg-white text-amber-600 hover:bg-amber-600 hover:text-white",
  };

  // استایل حالت فعال
  const activeStyle = {
    default: "bg-[#1F2C2A] hover:text-white",
    outline: "bg-[#4F7C6B] text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${isActive ? activeStyle[variant] : ""}`}
    >
      {children}
    </button>
  );
};
