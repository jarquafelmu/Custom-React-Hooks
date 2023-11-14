import "./App.css";
import ToggleComponent from "./1-useToggle/ToggleComponent";
import TimeoutComponent from "./2-useTimeout/TimeoutComponent";
import DebounceComponent from "./3-useDebounce/DebounceComponent";
import UpdateEffectComponent from "./4-useUpdate/UpdateEffectComponent";
import ArrayComponent from "./5-useArray/ArrayComponent";

function App() {
  return (
    <div className="App">
      Toggle Component
      <ToggleComponent />
      Timeout Component
      <TimeoutComponent />
      Debounce Component
      <DebounceComponent />
      Update Effect Component
      <UpdateEffectComponent />
      Array Component
      <ArrayComponent />
    </div>
  );
}

export default App;
