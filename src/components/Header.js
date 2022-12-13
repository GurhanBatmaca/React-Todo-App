import { useState } from 'react';

const Header = ( {listProp ,setListProp} ) => {

    const [inputValue , setInputValue] = useState("");
    // const [liste,setListe] = useState([])

    const onInput = (e) => {
        setInputValue([e.target.value]);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        // console.log(inputValue)
        setListProp([...listProp,inputValue])
        
    };

  return (
    <header>
        <h1>TODOS</h1>

        <form onSubmit={onSubmitForm}>

            <input
                onChange={onInput} 
                placeholder="What needs to be done?"
                autoFocus
            />

        </form>
        
    </header>
  )
};

export default Header;
