import { flow, types } from "mobx-state-tree";

const Todo = types.model({
  text: types.string
});

const Todos = types
  .model({
    todos: types.array(Todo)
  })
  .actions(self => {
    return {
      // The typeof operator belo is the important one: this is how you interact with types introduced
      // by mobx-state-tree
      add: flow(function* add(todo: typeof Todo.Type) {
        // aysnc test using FLOW and a generator for an operation
        const r = yield fetch("https://api.github.com");
        const b = yield r.json();
        todo.text += " " + b.current_user_url;
        self.todos.push(todo);
      }),

      remove(todo: typeof Todo.Type) {
        // self.todos.remove(todo);
        // This is necessary to interact with Store.Type.todos, which is an IObservable array, not
        // a normal array, which is what filter returns.
        self.todos.replace(
          self.todos.filter((v, i) => {
            return v.text !== todo.text;
          })
        );
      }
    };
  });

export default { Todos, Todo };
