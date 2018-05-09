import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// import registerServiceWorker from './registerServiceWorker';

import Todos from "./models/Todos";
import Wallet from "./models/Wallet";

const store = Todos.Todos.create({ todos: [] });
const wallet = Wallet.Wallet.create({ balance: 0, transactions: [] });

ReactDOM.render(<App store={store} wallet={wallet} />, document.getElementById("root") as HTMLElement);
// registerServiceWorker();
