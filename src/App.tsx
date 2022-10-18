import "./App.css";
import { ModalStack } from "./components/ModalStack";
import { AppRouter } from "./navigations";

function App() {
  return (
    <div className="pad-mar">
      <ModalStack />
      <AppRouter />
    </div>
  );
}

export default App;
