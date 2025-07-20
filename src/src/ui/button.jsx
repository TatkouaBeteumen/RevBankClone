export const Button = ({ children, ...props }) => (
  <button
    style={{
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
    }}
    {...props}
  >
    {children}
  </button>
);
