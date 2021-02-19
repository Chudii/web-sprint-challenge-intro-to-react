import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchData = () => {
      var i;
      const pages = 9;
      const dataHolder = [];
      for (i = 1; i <= pages; i++) {
        if(i === 1) {
          axios.get(`https://swapi.dev/api/people/`)
            .then(res => {
              dataHolder.unshift(res.data.results);
            })
        }
        else {
          axios.get(`https://swapi.dev/api/people/?page=${i}`)
            .then(res => {
              dataHolder.unshift(res.data.results);
            })
        }
      }
      return setCharacterList(dataHolder);
  
    }
    
    fetchData();
  }, []);

  console.log(characterList);

  
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {
        // characterList.forEach((list, index) => {
        //   characterList[index].forEach((char, index) => {
        //     return <Character 
        //     name={char[index].name}
        //     height={char[index].height}
        //     gender={char[index].gender}
        //     birth={char[index].birth_year}
        //     eyeColor={char[index].eye_color}
        //     />
        //   })
        // })
        }
    </div>
  );
}

export default App;
