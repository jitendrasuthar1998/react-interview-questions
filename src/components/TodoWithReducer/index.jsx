import { useReducer, useState } from "react";

const initialState = [];

function TodoReducer(state, action) {
  // add todo
  // update todo
  // remove todo
  const { type, payload } = action;

  switch (type) {
    case "ADD_TODO": {
      const { title } = payload;
      if (!title) return state;
      const isTodoExist = state.some(
        (todo) => todo.title.toLowerCase() === title.toLowerCase()
      );
      if (isTodoExist) {
        window.alert("Todo already exist");
        return state;
      }
      return [...state, { title, status: "pending", id: Date.now() }];
    }

    case "UPDATE_TODO": {
      const { id } = payload;
      return state.map((todo) =>
        todo.id == id ? { ...todo, status: "completed" } : todo
      );
    }

    case "REMOVE_TODO": {
      const { id } = payload;
      return state.filter((todo) => todo.id != id);
    }

    default:
      return state;
  }
}

const Todos = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const [text, setText] = useState("");

  return (
    <div>
      <h1>Todo</h1>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          dispatch({ type: "ADD_TODO", payload: { title: text } });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Add To Do</button>
      </form>

      {state.length ? (
        state.map(({ id, title, status }) => (
          <div key={id}>
            {title}
            <button
              onClick={() =>
                status == "pending"
                  ? dispatch({ type: "UPDATE_TODO", payload: { id } })
                  : dispatch({ type: "REMOVE_TODO", payload: { id } })
              }
            >
              {status == "pending" ? "Update Todo" : "Remove Todo"}
            </button>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default Todos;
