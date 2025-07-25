// import { useState } from 'react';
import Button from "react-bootstrap/Button";
import { useState } from "react";

// styles

import styles from "./Home.module.css";
import ModalHandler from "../../compnents/ModalHandler/ModalHandler";
export default function Home() {
  const [show, setShow] = useState(false);
  const [modalType, setModalType] = useState(null); 
  function getModalContent(type) {
    switch (type) {
      case "do":
        return (
          <div className={`${styles.content} ${styles.do}`}>
            <div>
              These tasks must be done immediately, ideally the same day or the
              next. They include crises, deadlines, and urgent problems, and
              often require the most time and energy. To tackle them
              effectively:
              <ul>
                <li>
                  Use Mark Twain’s "Eat the Frog" principle – start your day
                  with the hardest task.
                </li>
                <li>
                  Apply the Pomodoro Technique to stay focused and productive.
                </li>
                <li>
                  Maintain a dedicated space in your planner to regularly list
                  and break down these tasks.
                </li>
              </ul>
            </div>
          </div>
        );
      case "decide":
        return (
          <div className={`${styles.content} ${styles.decide}`}>
            <div>
              The second quadrant of The Eisenhower Matrix we call “Decide“.<br/>
              These tasks are important but less urgent. 
              <br/>
              Efficient time managers leave fewer things unplanned and therefore try to manage most of
              their work in the second quadrant. Planning important to-dos to a
              reasonable date in the near future helps avoid sudden deadlines.<br/>
              Remember – only because these are not considered urgent doesn’t
              mean you shouldn’t schedule realistic deadlines.
              <br/> Make sure to set yourself a fair time estimate.
            </div>
          </div>
        );
      case "delegate":
        return (
          <div className={`${styles.content} ${styles.delegate}`}>
            <div>
              The third quadrant is called “Delegate” because the tasks are less
              important to you but still urgent.<br/> This is where having a team
              spirit comes crucial in any company culture.<br/> These are tasks that
              technically you could do yourself, but suggesting a better person
              for the job takes the load off your shoulders. <br/>You will also have
              more time to complete the tasks from the first two quadrants when
              you consider delegating tasks that are not as urgent.<br/> You should
              keep track of delegated tasks by telephone, e-mail, or within a
              meeting to check on their progress later. <br/>Delegating without a
              tracking option is as worthless as not doing the task at all
              because in the end nobody could be held accountable.<br/> And no
              business needs tasks piling up without anyone taking care of them.
            </div>
          </div>
        );
      case "delete":
        return (
          <div className={`${styles.content} ${styles.delete}`}>
            <div>
              The last quadrant in the matrix is called “Delete” because it
              makes you consider the things you should not be doing at all and
              “delete” them from your daily/weekly routine. <br/>Discover and stop
              the bad habits that basically are a complete waste of time and do
              not make you productive. <br/>These are time wasters, such as surfing
              the internet for no reason or wasting time on unimportant and
              irrelevant emails. <br/>To help you with time management: Use a planner
              to write down “Delete” tasks in the dedicated monthly area of
              “Not-To-Dos”.
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className={`container mt-3 mb-3 ${styles.wrapper}`}>
      <main className={`d-flex justify-content-around flex-wrap`}>
        <div className={`col-md-4 ${styles.text}`}>
          <h2> How to use the Eisenhower Matrix</h2>
          <p>
            {" "}
            The Eisenhower Matrix (sometimes called the Eisenhower Box or
            Eisenhower Decision Matrix) is an easy, yet extremely effective way
            to prioritize and manage tasks and your time according to priorities
            and urgent tasks. It is a system that basically makes you separate
            all your activities into four priority levels, one of which (Not
            Important/Not Urgent) is immediately dropped. So really it’s only
            three categories of attention-worthy tasks to focus on (see the
            picture below).
          </p>
        </div>
        <div className="col-md-6">
          <div className={styles.eisenhower_matrix}>
            <div className={styles.top_label}></div>
            <div className={styles.top_label}>Urgent</div>
            <div className={styles.top_label}>Not Urgent</div>
            <div className={styles.side_label}>Important</div>
            {/* do box */}
            <button
              onClick={() => {
                setModalType("do");
                setShow(true);
              }}
              className={`${styles.box} ${styles.do}`}
            >
              <h2>Do</h2>
              <p>Do it now.</p>
            </button>
            <ModalHandler show={show} setShow={setShow}>
              {getModalContent(modalType)}
            </ModalHandler>

            {/* decide box */}
            <button
              onClick={() => {
                setModalType("decide");
                setShow(true);
              }}
              className={`${styles.box} ${styles.decide}`}
            >
              <h2>Decide</h2>
              <p>Schedule a time to do it</p>
            </button>
            <ModalHandler show={show} setShow={setShow}>
              {getModalContent(modalType)}
            </ModalHandler>
            {/* delegate */}
            <div className={styles.side_label}>Not Important</div>
            <button
              onClick={() => {
                setModalType("delegate");
                setShow(true);
              }}
              className={`${styles.box} ${styles.delegate}`}
            >
              <h2>Delegate</h2>
              <p>Who can do it for you?</p>
            </button>
            <ModalHandler show={show} setShow={setShow}>
              {getModalContent(modalType)}
            </ModalHandler>
            {/* delete */}
            <button
              onClick={() => {
                setModalType("delete");
                setShow(true);
              }}
              className={`${styles.box} ${styles.delete}`}
            >
              <h2>Delete</h2>
              <p>Eliminate it</p>
            </button>
            <ModalHandler show={show} setShow={setShow}>
              {getModalContent(modalType)}
            </ModalHandler>
          </div>
        </div>
      </main>
    </div>
  );
}
