interface HeaderProps {
  onToggleAdminMode: () => void;
  isAdminMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleAdminMode, isAdminMode }) => {
  return (
    <header>
      <h1>Expense App</h1>
      <button onClick={onToggleAdminMode}>
        {isAdminMode ? "Disable Admin Mode" : "Enable Admin Mode"}
      </button>
    </header>
  );
};

export default Header;
