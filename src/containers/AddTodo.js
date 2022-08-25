import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { store } from "../index";
import combineState from "../utils/combineState";
import actionMap from "../actions/actionMap";

const AddTodo = ({ dispatch }) => {
  let input;

  const updateStore = () => {
    // localState 本地state, globalState外部容器中的state
    const localState = store.getState();

    const globalState = {
      personInfo: { name: "zw" },
      todos: [
        {
          id: 102,
          text: "zhangwai !!",
          completed: false,
        },
      ],
      // visibilityFilter: "SHOW_ALL",
      visibilityFilter: "SHOW_ACTIVE",
    };
    combineState(
      { oldState: localState, newState: globalState },
      { store, actionMap }
    );
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={updateStore}>updateStore</button>
    </div>
  );
};

export default connect()(AddTodo);
