import * as React from "react";
import "./App.css";
import Todos from "./models/Todos";
import Wallet from "./models/Wallet";

import { observer } from "mobx-react";

@observer
class App extends React.Component<{ store: typeof Todos.Todos.Type; wallet: typeof Wallet.Wallet.Type }> {
  private todoInput: HTMLInputElement;

  public addTodo(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (this.todoInput.value !== "") {
      this.props.store.add({ text: this.todoInput.value });
      // Notice that this is type-checked properly. For example, something like this:
      // this.props.store.add({ tyxt: true });
      // Will result in a compile-time error
      this.todoInput.value = "";
    }
  }

  public removeTodo(e: React.SyntheticEvent<HTMLButtonElement>, todo: typeof Todos.Todo.Type) {
    e.preventDefault();
    this.props.store.remove(todo);
  }

  public getBalance(e: React.SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.props.wallet.getBalance();
  }

  public render() {
    return (
      <div>
        <div>Balance {this.props.wallet.balance}</div>
        <form>
          <button type="submit" onClick={this.getBalance.bind(this)}>
            Get Balance
          </button>
        </form>
        <br />
        <form>
          <input
            ref={r => {
              if (r) this.todoInput = r;
            }}
            type="text"
            placeholder="Add entry"
          />
          <button type="submit" onClick={this.addTodo.bind(this)}>
            Add todo
          </button>
        </form>

        <ul>
          {this.props.store.todos.map((item, i) => {
            return (
              <li key={i}>
                {item.text} &nbsp; &nbsp;
                <button onClick={e => this.removeTodo(e, item)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

/*
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
