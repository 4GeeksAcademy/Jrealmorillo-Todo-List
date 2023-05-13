import { useState } from "react";
import React from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [toDos, setToDos] = useState([]);
  const [showTrashIcon, setShowTrashIcon] = useState(-1);
  const [allDeleted, setAllDeleted] = useState(false);


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setToDos((toDos) => [...toDos, inputValue]);
      setInputValue("");
      setAllDeleted(false);
    }
  };

  const handleChange = (event) => setInputValue(event.target.value);

  const handleDeleteToDo = (index) => {
    setToDos((toDos) => toDos.filter((_, i) => i !== index));
    if (toDos.length === 1) {
      setAllDeleted(true);
    }
  };

  return (
    <div className="container col-4 text-center align-items-center">
      <h1 className="tracking-in-expand-forward-top">My ToDo List</h1>
      <ul className="align-items-center">
        <li className="align-items-center shake-horizontal">
          <input
            type="text"
            onChange={handleChange}
            value={inputValue}
            placeholder="Add some task"
            onKeyDown={handleKeyDown}
          ></input>
        </li>
        {toDos.map((item, index) => (
          <li
            key={index}
            className="d-flex flex-nowrap justify-content-center list-item"
            onMouseEnter={() => setShowTrashIcon(index)}
            onMouseLeave={() => setShowTrashIcon(-1)}
          >
            <span>{item}</span>
            <span>
            {showTrashIcon === index && (
                <i
                  className="fa fa-trash"
                  onClick={() => handleDeleteToDo(index)}
                ></i>
              )}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-center tracking-in-expand-forward-bottom">
        {toDos.length > 0 && (
          <div>You have {toDos.length} remaining tasks</div>
        )}
        {allDeleted && <div>Congratulations! Now go play videogames you naugthy boy!</div>}
        {!allDeleted && toDos.length === 0 && (
          <div className="d-flex flex-nowrap justify-content-center">There is currently nothing left to do</div>
        )}
      </div>
    </div>
  );
};

export default Home;


