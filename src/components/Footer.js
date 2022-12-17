import { useState, useEffect } from 'react';

const Footer = ( {formProp, setFormProp, showProp, setShowProp} ) => {

  const [itemCount, setItemCount] = useState(formProp.length);
  const [onClearItems, setOnClearItem] = useState([]);
  const [inClass, setinClass] = useState("allClass");

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
    // setinClass("clicted");
  }

  useEffect(() => {
    console.log("class değişimi")
  },[inClass])

  useEffect(() => {
    setFormProp(onClearItems);
  }, [onClearItems])

  return (
    <footer>
      {
        formProp.length > 0 ? 
        <div className='footer'>
        <div>
          <span>{itemCount} item / </span>
          <span>{ActiveItemCount} active item left</span>
        </div>
        <button className={inClass == "allClass" ? 'clicted' : "" } onClick={() => {setShowProp("all")}}>All</button>
        <button className={inClass == "acticeClass" ? 'clicted' : "" } onClick={() => {setShowProp("acvite")}}>Active</button>
        <button className={inClass == "completedClass" ? 'clicted' : "" } onClick={() => {setShowProp("completed")}}>Completed</button>
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
