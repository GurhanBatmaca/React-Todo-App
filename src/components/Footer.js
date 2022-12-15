import { useState, useEffect } from 'react';

const Footer = ( {formProp, setFormProp, showProp, setShowProp} ) => {
  return (
    <footer>
      <div>
        <span>{formProp.length} item left</span>
        <button onClick={() => {setShowProp("all")}}>All</button>
        <button onClick={() => {setShowProp("acvite")}}>Active</button>
        <button onClick={() => {setShowProp("completed")}}>Completed</button>
        <button onClick={() => {setShowProp("clear")}}>Clear completed</button>
      </div>
    </footer>
  )
};

export default Footer;
