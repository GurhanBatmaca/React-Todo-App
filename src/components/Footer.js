import { useState, useEffect } from 'react';

const Footer = ( {formProp, setFormProp, setShowProp} ) => {

  const [itemCount, setItemCount] = useState(formProp.length);
  const [onClearItems, setOnClearItem] = useState([]);
  const [inClass, setInClass] = useState("allClass");

  let count = formProp.filter((item) => {
    return item.active == true;
  })

  useEffect(() => {
    setItemCount(formProp.length);
  }, [formProp])

  const [ActiveItemCount, setActiveItemCount] = useState(count.length);

  useEffect(() => {
    setActiveItemCount(count.length);
  }, [count])

  const clearItems = (e) => {
    let actives = formProp.filter((item) => {
      return item.active == true;
    })
    setOnClearItem(actives);
  }

  useEffect(() => {
    setFormProp(onClearItems);
  }, [onClearItems])

  const clicted = (a,b) => {
    setShowProp(a);
    setInClass(b)
  }

  return (
    <footer>
      {
        formProp.length > 0 ? 
        <div className='footer'>
        <div>
          <span>{itemCount} item / </span>
          <span>{ActiveItemCount} active item left</span>
        </div>
        <button className={inClass == "allClass" ? 'clicted' : "" } onClick={() => {clicted("all","allClass")}}>All</button>
        <button className={inClass == "activeClass" ? 'clicted' : "" } onClick={() => {clicted("acvite","activeClass")}}>Active</button>
        <button className={inClass == "completedClass" ? 'clicted' : "" } onClick={() => {clicted("completed","completedClass")}}>Completed</button>
        {
          ActiveItemCount > 0 ? <button className="" onClick={clearItems}>Clear completed</button> : null
        }
      </div>
      : null
      }
    </footer>
  )
};

export default Footer;
