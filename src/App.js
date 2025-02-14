import { randomColors } from "./ChildrenA";
import AppProvider from "./contexts/context";
import { Parent } from "./Parent";
import "./styles.css";

export default function App() {
  console.log("re-render App");
  return (
    <AppProvider>
      <div className="App">
        <h1 style={{ color: randomColors() }}>Hello CodeSandbox</h1>
        <Parent />
      </div>
    </AppProvider>
  );
}
