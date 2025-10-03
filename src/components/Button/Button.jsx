// components/Button/Button.jsx
// ==========================================
function Button({ children, onClick, className }) {
  const finalClassName = `button ${className || ''}`.trim();
  return (
    <button className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}

// (Nota: O código abaixo é apenas para fins de visualização e não é necessário
// para o funcionamento do App.jsx acima, que já tem tudo embutido)
export default Button;