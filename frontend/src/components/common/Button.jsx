
const Button = ({ children, type = "button", onClick, className = "", disabled = false }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={` px-5 py-2.5 rounded-lg font-medium transition-all bg-blue-600 text-white
        hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
      {children}
    </button>
  );
};

export default Button;