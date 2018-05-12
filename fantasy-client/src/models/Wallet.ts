import { flow, types } from "mobx-state-tree";
import Layer2lib from "js-layer2lib";
console.log(Layer2lib);
type L2 = Layer2lib;
const l2: L2 = new Layer2lib("http://127.0.0.1:8545");

const Transation = types.model({
  from_id: types.string,
  from_type: types.string,
  amount: types.number,
  to_id: types.string,
  to_type: types.string
});

const Wallet = types
  .model({
    balance: types.number,
    transactions: types.array(Transation)
  })
  .actions(self => {
    return {
      // The typeof operator belo is the important one: this is how you interact with types introduced
      // by mobx-state-tree
      transact: flow(function* transact(todo: typeof Transation.Type) {
        // aysnc test using FLOW and a generator for an operation
        const r = yield fetch("https://api.github.com");
        const b = yield r.json();
        self.balance = (b.current_user_url + "").charCodeAt(0);
      }),

      getBalance: flow(function* getBalance() {
        // aysnc test using FLOW and a generator for an operation
        const bal: string = yield l2.getMainnetBalance("0x7ea92dBce5387f8fF480Fe5D557aBd4C7B09054f");
        self.balance = Number.parseFloat(bal);
      })
    };
  });

export default { Wallet, Transation };
