import { useState, useEffect } from 'react';
import '../styles/App.css';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';

function App() {

  const [list, setList] = useState([]);
  const [listSon, setListSon] = useState([])
  
  useEffect(() => {
    console.log(list);
    list.forEach((item) => {
      item.forEach((i) => {
        setListSon([...listSon,i])
      })
    })
    console.log(listSon);
  }, [list])

  return (
    <div className="App">

      <Header listProp={list} setListProp={setList} />

      <Main />

      <Footer />

    </div>
  );
}

export default App;
