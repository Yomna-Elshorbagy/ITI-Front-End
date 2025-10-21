import { Provider } from "react-redux";
import Router from "./src/router/Router";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
