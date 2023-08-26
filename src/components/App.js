import NumPad from "./NumPad";
import Output from "./Output";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <div className="calculator">
      <ThemeToggle />
      <Output />
      <NumPad />
    </div>
  );
}

export default App;
