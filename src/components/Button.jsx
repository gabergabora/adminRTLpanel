// eslint-disable-next-line react/prop-types
const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl   `}
    >
      {text}
    </button>
  );
};

export default Button;
