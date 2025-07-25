import React from 'react'
import ReactDOM from 'react-dom';
// import { createPortal } from 'react-dom';
import styles from './ModalHandler.module.css'
export default function ModalHandler({show,setShow,children}) {
  return (
   <>
  {show && ReactDOM.createPortal(
  <div className={styles.wrapper}>
    <div onClick={() => setShow(false)} className={styles.overlay}>
      {children}
    </div>
  </div>,
  document.getElementById('modal')
)}

   </>
  )
}
