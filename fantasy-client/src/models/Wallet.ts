import { flow, types } from "mobx-state-tree";

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
        const r = yield fetch("https://api.github.com");
        const b = yield r.json();
        self.balance = String(b.current_user_url).charCodeAt(1);
      })
    };
  });

export default { Wallet, Transation };
