import { useState, useEffect } from 'react';

const Main = ( {formProp, setFormProp, showProp} ) => {

  const [deleteItem, setDeleteItem] = useState("");
  const [showTodo, setShowTodo] = useState(formProp)

  const deleteBtn = (e) => {
    setDeleteItem(e);
    // console.log("click");
  };

  const todos = formProp.filter((item) => {
    return item.id !== deleteItem;
  });

  const onCheck = (item) => {
    formProp.map((i) => {
      if(i.id == item) {
        // console.log(item);
        i.active = !i.active;
        // console.log(i.active);
      }
    })
  };

  useEffect(() => {
    setFormProp(todos);
  },[deleteItem]);

  let showList = formProp.filter( item => item);


  useEffect(() => {
    setShowTodo(showList)
    if(showProp=="all") {
      console.log("all")
      showList = formProp.filter((item) => {
        return item.active == true || item.active == false
      })
      setShowTodo(showList);
      console.log(showList);
    } else if(showProp=="acvite") {
      console.log("active");
      showList = formProp.filter((item) => {
        return item.active == true
      })
      setShowTodo(showList);
      console.log(showList);
    } else if(showProp=="completed") {
      console.log("completed");
      showList = formProp.filter((item) => {
        return item.active == false
      })
      setShowTodo(showList);
      console.log(showList);
    } 
  },[showProp]);

  return (
    <main>
        <ul>
          {
            showTodo.map((item) => (
              <li key={item.id} className="list_item p-3">
                <span className='list-span'>
                  <input
                    onChange={(()=> {onCheck(item.id)})}
                    type="checkbox"
                    id={item.id}
                  />
                  <span className='text-span'>{item.text}</span>
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
