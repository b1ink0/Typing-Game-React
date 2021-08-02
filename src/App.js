import "./App.scss";
import InputComponent from "./components/InputComponent";
import { StateProvider } from "./context/StateContext";

function App() {
  return (
    <StateProvider>
      <InputComponent/>
    </StateProvider>
  );
}

export default App;
