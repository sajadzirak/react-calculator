function ThemeToggle({ darkMode, onChangeTheme }) {
  return (
    <div className="theme-toggle">
      <div className={`${darkMode ? "" : "active-toggle"}`} onClick={() => darkMode ? onChangeTheme() : null}>
        <i class="ri-sun-line"></i> 
      </div>
      <div className={`${darkMode ? "active-toggle" : ""}`} onClick={() => darkMode ? null : onChangeTheme()}>
        <i class="ri-moon-line"></i>
      </div>
    </div>
  );
}

export default ThemeToggle;
