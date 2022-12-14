import { useState, useEffect } from 'react';
import '../styles/App.css';
import Footer from './Footer';
import Main from './Main';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [form, setForm] = useState([]);

  const onInput = (e) => {
    setInputValue([e.target.value]);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setForm([...form,{text:inputValue.toString(), id:form.length +1, active:true}]);
  };

  useEffect(() => {
    // console.log(form);
    setInputValue("");
  }, [form]);

  return (
    <div className="App container todo">

      <header>
        <h1>TODOS</h1>
        <form onSubmit={onSubmitForm}>
            <input
                value={inputValue}
                className='w-100 p-3'
                onChange={onInput} 
                placeholder="What needs to be done?"
                autoFocus
            />
        </form>       
      </header>

      <Main
       formProp={form}
       setFormProp={setForm}
      />

      <Footer />

    </div>
  );
}

export default App;
