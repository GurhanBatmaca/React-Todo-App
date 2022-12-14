import { useState, useEffect } from 'react';

const Main = ( {formProp,setFormProp} ) => {

  const [clearItem, setClearItem] = useState("");
  const [finalList, setFinalList] = useState([]);

  const clearBtn = (e) => {
    setClearItem(e);
    console.log("click");
  };

  useEffect(() => {
    console.log(clearItem);
    // const todos = formProp.filter((item) => {
    //   return item.id !== clearItem
    // })

    // console.log(todos);
  },[clearItem])

  const todos = formProp.filter((item) => {
    return item.id !== clearItem
  })

  return (
    <main>
        <ul>
          {
            todos.map((item) => (
              <li key={item.id} className="list_item p-3">
                <span className='list-span'>
                  <input type="checkbox" id={item.id} />
                  <span className='text-span'>{item.text}</span>
                </span>
                <button                   
                  onClick={() => {clearBtn(item.id)}}

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
