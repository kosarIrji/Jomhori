export const Button = ({ children, onClick, variant = "default", isActive = false }) => {
  const base = "px-4 py-0 rounded-xl  text-base font-medium transition h-10";
  const variants = {
    default: "text-white bg-[#2F3E3B] hover:bg-[#1F2C2A]",
    outline: "border border-[#2F3E3B] bg-white text-[#2F3E3B] hover:bg-[#4F7C6B]",
  };

  // استایل حالت فعال
  const activeStyle = {
    default: "bg-[#1F2C2A]",
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
