import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Todos from "./models/Todos";

import Wallet from "./models/Wallet";

it("renders without crashing", () => {
  const div = document.createElement("div");

  const store = Todos.Todos.create({ todos: [] });
  const wallet = Wallet.Wallet.create({ balance: 0, transactions: [] });

  ReactDOM.render(<App store={store} wallet={wallet} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
