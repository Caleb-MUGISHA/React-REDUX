import "./App.css";
import HooksCakeContainer from "./component/HooksCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksIceCreamContainer from "./component/HooksIceCreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
