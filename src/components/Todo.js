import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Todo.css";
import { addTodo, deleteTodo, removeTodo } from "../actions/Index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your Items Here 👇</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items "
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={() => {
                dispatch(addTodo(inputData), setInputData(""));
              }}
            ></i>
          </div>

          <div className="showItems">
            {list.map((ele) => {
              return (
                <div className="eachItem" key={ele.id}>
                  <h3>{ele.data}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => {
                        dispatch(deleteTodo(ele.id));
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItem">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={() => {
                dispatch(removeTodo());
              }}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
