import React from 'react'
import './ModalAccess.css'

const ModalAccess = (props) => {
  const modalHandler = () =>{
    console.log('done');
    props.onConfirm();
  }
  return (
    <div>
    <div className='backdrop' onClick={props.onConfirm} />
    <div className='modal'>
      <header className='modalheader'>
        <h2>Enter Access key</h2>
      </header>
      <div className='modalcontent'>
        <input type='text' />
      </div>
      <footer className='modalactions'>
        <button onClick={modalHandler}>Submit</button>

      </footer>
    </div>
  </div>
  )
}

export default ModalAccess
