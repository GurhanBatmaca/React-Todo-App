import { useState, useEffect } from 'react';

const Footer = ( {formProp, setFormProp, showProp, setShowProp} ) => {

  const [itemCount, setItemCount] = useState(formProp.length);

  // let count = formProp.filter((item) => {
  //   return item.active == true;
  // })

  useEffect(() => {
    setItemCount(formProp.length);
  }, [formProp])

  return (
    <footer>
      <div>
        <span>{itemCount} item left</span>
        <button onClick={() => {setShowProp("all")}}>All</button>
        <button onClick={() => {setShowProp("acvite")}}>Active</button>
        <button onClick={() => {setShowProp("completed")}}>Completed</button>
        <button onClick={() => {setShowProp("clear")}}>Clear completed</button>
      </div>
    </footer>
  )
};

export default Footer;
