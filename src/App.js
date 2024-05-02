import "./App.css";
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { TState } from "./TState";

function App() {
  return (
    <TState>
      <div className="main-box">
        <div className="box">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </TState>
  );
}

export default App;
