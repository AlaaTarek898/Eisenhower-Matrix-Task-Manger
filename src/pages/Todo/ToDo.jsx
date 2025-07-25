import React, { useState, useEffect } from "react";
import styles from "./ToDO.module.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ToDo() {
  const [task, setTask] = useState("");

  const [doListTasks, setdoListTasks] = useState([]);
  const [decideListTasks, setdecideListTasks] = useState([]);
  const [delegateListTasks, setdelegateListTasks] = useState([]);
  const [deleteListTasks, setdeleteListTasks] = useState([]);
  const [priorityValue, setpriorityValue] = useState("");
  const [doneList, setDoneList] = useState([]);

  function addHandler() {
    const newTask = {
      id: Math.random(),
      task: task,
    };
    if(task){
    if (priorityValue === "do") {
      const updated = [...doListTasks, newTask];
      setdoListTasks(updated);
      localStorage.setItem("doListTasks", JSON.stringify(updated));
    } else if (priorityValue === "decide") {
      const updated = [...decideListTasks, newTask];
      setdecideListTasks(updated);
      localStorage.setItem("decideListTasks", JSON.stringify(updated));
    } else if (priorityValue === "delegate") {
      const updated = [...delegateListTasks, newTask];
      setdelegateListTasks(updated);
      localStorage.setItem("delegateListTasks", JSON.stringify(updated));
    } else if (priorityValue === "delete") {
      const updated = [...deleteListTasks, newTask];
      setdeleteListTasks(updated);
      localStorage.setItem("deleteListTasks", JSON.stringify(updated));
    }}

    setTask("");
    setpriorityValue("");
  }

  function doneListHandler(taskItem) {
    const doneTask = {
      id: taskItem.id,
      task: taskItem.task,
    };

    const newDoneList = [...doneList, doneTask];
    setDoneList(newDoneList);

    // Remove from all lists
    const newDo = doListTasks.filter((task) => task.id !== taskItem.id);
    const newDecide = decideListTasks.filter((task) => task.id !== taskItem.id);
    const newDelegate = delegateListTasks.filter(
      (task) => task.id !== taskItem.id
    );
    const newDelete = deleteListTasks.filter((task) => task.id !== taskItem.id);

    setdoListTasks(newDo);
    setdecideListTasks(newDecide);
    setdelegateListTasks(newDelegate);
    setdeleteListTasks(newDelete);

    // Update localStorage
    localStorage.setItem("doneList", JSON.stringify(newDoneList));
    localStorage.setItem("doListTasks", JSON.stringify(newDo));
    localStorage.setItem("decideListTasks", JSON.stringify(newDecide));
    localStorage.setItem("delegateListTasks", JSON.stringify(newDelegate));
    localStorage.setItem("deleteListTasks", JSON.stringify(newDelete));
  }
  function doneListDelete() {
    setDoneList([]);
    localStorage.setItem("doneList", JSON.stringify([]));
  }
  useEffect(() => {
    const storedDo = JSON.parse(localStorage.getItem("doListTasks")) || [];
    const storedDecide =
      JSON.parse(localStorage.getItem("decideListTasks")) || [];
    const storedDelegate =
      JSON.parse(localStorage.getItem("delegateListTasks")) || [];
    const storedDelete =
      JSON.parse(localStorage.getItem("deleteListTasks")) || [];
    const storedDone = JSON.parse(localStorage.getItem("doneList")) || [];

    setdoListTasks(storedDo);
    setdecideListTasks(storedDecide);
    setdelegateListTasks(storedDelegate);
    setdeleteListTasks(storedDelete);
    setDoneList(storedDone);
  }, []);
  useEffect(() => {
    localStorage.setItem("doListTasks", JSON.stringify(doListTasks));
    localStorage.setItem("decideListTasks", JSON.stringify(decideListTasks));
    localStorage.setItem(
      "delegateListTasks",
      JSON.stringify(delegateListTasks)
    );
    localStorage.setItem("deleteListTasks", JSON.stringify(deleteListTasks));
    localStorage.setItem("doneList", JSON.stringify(doneList));
  }, [
    doListTasks,
    decideListTasks,
    delegateListTasks,
    deleteListTasks,
    doneList,
  ]);

  return (
    <div className="container d-flex justify-content-between flex-wrap">
      <div className="col-md-6">
        <div className={styles.eisenhower_matrix}>
          <div className={styles.top_label}></div>
          <div className={styles.top_label}>Urgent</div>
          <div className={styles.top_label}>Not Urgent</div>
          <div className={styles.side_label}>Important</div>
          {/* do box */}
          <div className={`${styles.box} ${styles.do}`}>
            <h2>Do</h2>
            <ul className={styles.list}>
              {doListTasks.map((taskItem) => {
                return (
                  <li className={styles.text} key={taskItem.id}>
                    {taskItem.task}
                    <div>
                      <button
                        className={styles.btnaction}
                        onClick={() => doneListHandler(taskItem)}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className={styles.right}
                          icon={faCheck}
                        />
                      </button>
                      <button
                        className={styles.btnaction}
                        onClick={() =>
                          setdoListTasks(
                            doListTasks.filter(
                              (task) => task.id !== taskItem.id
                            )
                          )
                        }
                      >
                        <FontAwesomeIcon
                          className={styles.wrong}
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* decide box */}
          <div className={`${styles.box} ${styles.decide}`}>
            <h2>Decide</h2>
            <ul className={styles.list}>
              {decideListTasks.map((decideListTask) => {
                return (
                  <li className={styles.text} key={decideListTask.id}>
                    {decideListTask.task}
                    <div>
                      <button
                        className={styles.btnaction}
                        onClick={() => doneListHandler(decideListTask)}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className={styles.right}
                          icon={faCheck}
                        />
                      </button>
                      <button
                        className={styles.btnaction}
                        onClick={() =>
                          setdecideListTasks(
                            decideListTasks.filter(
                              (task) => task.id !== decideListTask.id
                            )
                          )
                        }
                      >
                        <FontAwesomeIcon
                          className={styles.wrong}
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* delegate */}
          <div className={styles.side_label}>Not Important</div>
          <div className={`${styles.box} ${styles.delegate}`}>
            <h2>Delegate</h2>
            <ul className={styles.list}>
              {delegateListTasks.map((delegateListTask) => {
                return (
                  <li className={styles.text} key={delegateListTask.id}>
                    {delegateListTask.task}
                    <div>
                      <button
                        className={styles.btnaction}
                        onClick={() => doneListHandler(delegateListTask)}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className={styles.right}
                          icon={faCheck}
                        />
                      </button>
                      <button
                        className={styles.btnaction}
                        onClick={() =>
                          setdelegateListTasks(
                            delegateListTasks.filter(
                              (task) => task.id !== delegateListTask.id
                            )
                          )
                        }
                      >
                        <FontAwesomeIcon
                          className={styles.wrong}
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* delete */}
          <div className={`${styles.box} ${styles.delete}`}>
            <h2>Delete</h2>
            <ul className={`text-decoration-line-through ${styles.list}`}>
              {deleteListTasks.map((deleteListTask) => {
                return (
                  <li className={styles.text} key={deleteListTask.id}>
                    {deleteListTask.task}
                    <div>
                      <button
                        className={styles.btnaction}
                        onClick={() => doneListHandler(deleteListTask)}
                      >
                        {" "}
                        <FontAwesomeIcon
                          className={styles.right}
                          icon={faCheck}
                        />
                      </button>
                      <button
                        className={styles.btnaction}
                        onClick={() =>
                          setdeleteListTasks(
                            deleteListTasks.filter(
                              (task) => task.id !== deleteListTask.id
                            )
                          )
                        }
                      >
                        <FontAwesomeIcon
                          className={styles.wrong}
                          icon={faXmark}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-12  d-flex flex-column align-items-center justify-content-around mt-5">
        <div className="col-md-6 col-11 d-flex flex-column align-items-center justify-content-around mt-5">
          <Form.Control
            onChange={(e) => setTask(e.target.value)}
            value={task}
            typeof="text"
            placeholder="write the task you think about"
            type="text"
          />

          <Form.Select
            className="m-3"
            value={priorityValue}
            aria-label="Default select example"
            onChange={(e) => {
              setpriorityValue(e.target.value);
            }}
          >
            <option value="">Think a While about task priority</option>
            <option value="do">do</option>
            <option value="decide">decide</option>
            <option value="delegate">delegate</option>
            <option value="delete">delete</option>
          </Form.Select>
        </div>
        <button className={styles.button} onClick={addHandler}>
          add
        </button>
        {doneList.length > 0 && (
          <div className="col-md-8">
            <p className={styles.congate}>Congrate you achieve these goals</p>
            <ul className={` ${styles.achievment}`}>
              {doneList.map((item) => (
                <li className="col-md-10" key={item.id}>
                  {item.task}
                </li>
              ))}
            </ul>
            <button className={styles.reset} onClick={doneListDelete}>
              Reset Done menu
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
