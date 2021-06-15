import "./App.css";
import { Provider } from "react-redux";
import store from "./part2/store";
import HooksCakeContainer from "./part2/components/HooksCakeContainer";
import HooksIceCreamContainer from "./part2/components/HooksIceCreamContainer";
import NewCakeContainer from "./part2/components/NewCakeContainer";
import ItemContainer from "./part2/components/ItemContainer";
import UserContainer from "./part2/components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer iceCream />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
