import "./App.css";

import Counter from "./components/CounterContainer";
import Friends from "./components/FriendsContainer";
function App() {
    return (
        <div className="App">
            <Counter />

            {<Friends />}
        </div>
    );
}

export default App;
