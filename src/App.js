import "./App.scss";
import AudioComponent from "./components/AudioComponent";
import InputComponent from "./components/InputComponent";
import { StateProvider } from "./context/StateContext";

function App() {
  return (
    <StateProvider>
      <InputComponent/>
      <AudioComponent/>
    </StateProvider>
  );
}

export default App;
