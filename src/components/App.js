import { useState, useEffect } from 'react';
import '../styles/App.css';
import Footer from './Footer';
import Main from './Main';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [form, setForm] = useState([]);
  const [show,setShow] = useState("all")

  const onInput = (e) => {
    setInputValue([e.target.value]);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setForm([...form,{text:inputValue.toString(), id:form.length +1, active:true}]);
  };

  useEffect(() => {
    setInputValue("");
  }, [form]);

  return (
    <div className="App container todo">

      <header className='todoapp'>
        <h1>TODOS</h1>
        <form onSubmit={onSubmitForm}>
            <input
                value={inputValue}
                className='w-100 p-3 new-todo'
                onChange={onInput} 
                placeholder="What needs to be done?"
                autoFocus
            />
        </form>       
      </header>

      <Main
       formProp={form}
       setFormProp={setForm}
       showProp={show}
      />

      <Footer 
        formProp={form}
        setFormProp={setForm}
        showProp={show}
        setShowProp={setShow}
      />

    </div>
  );
}

export default App;
