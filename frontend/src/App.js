import React from "react";
import SportForm from "./components/SportForm.js";
import { Provider } from "react-redux";

import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <SportForm />
    </Provider>
  );
}

export default App;
