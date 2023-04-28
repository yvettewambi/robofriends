import { robots } from "./Components/robots";
import Cardlist from "./Components/CardList";

function App() {
  return (
    <div className="App">
      <Cardlist robots={robots} />
    </div>
  );
}

export default App;
