import { useState, useEffect } from 'react';

const Main = ( {formProp, setFormProp, showProp} ) => {

  const [deleteItem, setDeleteItem] = useState("");
  const [showTodo, setShowTodo] = useState([]);

  const deleteBtn = (e) => {
    setDeleteItem(e);
  };

  const onAfterDeletedItems = formProp.filter((item) => {
    return item.id !== deleteItem;
  });

  useEffect(() => {
    setFormProp(onAfterDeletedItems);
  },[deleteItem]);

  const onCheck = (item) => {
    formProp.map((i) => {
      if(i.id == item) {
        i.active = !i.active;
      }
    })
  };

  useEffect(() => {
    if(showProp=="all") {
      let showList = formProp.filter((item) => {
        return item.active == true || item.active == false
      })
      setShowTodo(showList);
    } else if(showProp=="acvite") {
      let showList = formProp.filter((item) => {
        return item.active == true
      })
      setShowTodo(showList);
    } else if(showProp=="completed") {
      let showList = formProp.filter((item) => {
        return item.active == false
      })
      setShowTodo(showList);
    } 
  },[showProp,formProp]);

  return (
    <main>
        <ul>
          {
            showTodo.map((item) => (
              <li key={item.id} className="list_item p-3">
                <span className='list-span'>
                  <input
                    onChange={(()=> {onCheck(item.id)})}
                    className="toggle-all"
                    type="checkbox"
                    id={item.id}
                  />
                  {
                    item.active ? 
                      <span className='text-span'>{item.text}</span> 
                    : <span className='text-span'><del>{item.text}</del></span>
                  }
                </span>
                <button
                  onClick={() => {deleteBtn(item.id)}}
                  className='btn btn-clear'
                >
                  <i className="fa-solid fa-xmark">
                  </i>
                </button>
              </li>
            ))
          }
        </ul>
    </main>
  )
};

export default Main;
