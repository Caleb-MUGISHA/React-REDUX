import "./App.css";
import HooksCakeContainer from "./component/HooksCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksIceCreamContainer from "./component/HooksIceCreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import ItemContainer from "./component/ItemContainer";
import UserContainer from "./component/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
