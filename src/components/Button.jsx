export default function Button({
  isSelected,
  children,
  onClick,
  name,
  ...props
}) {
  return (
    <button
      className={!isSelected ? "" : "selected"}
      {...props}
      onClick={() => onClick(name)}
    >
      {children}
    </button>
  );
}
