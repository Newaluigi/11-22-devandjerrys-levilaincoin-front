// import { useState } from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import SearchList from './SearchList';

// const Search = (props) => {
//   const { search, setSearch } = props;
  const Search = () => {

  // XXXXXXXXXXXXXXX initial state, full list XXXXXXXXXXXXXXXXX
  const [vilains, setVilains] = useState([])
  // UseEffect
  useEffect(() => {
    axios.get('http://localhost:4242/').then(response => {
      console.log(response.data);
      setVilains(response.data)
    })
  },[])
  // XXXXXXXXXXXXXXXX state of the vilain List display  XXXXXXXXXXXXXXXXXXXXXXXXXX
  const [search, setSearch] = useState("");
  const vilainsDisplayed = vilains;

  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const [isGlassDisplayed, setIsGlassDisplayed] = useState("");
  const [isInputDisplayed, setisInputDisplayed] = useState('');

  const handleClickGlass = (e) =>{

    setIsGlassDisplayed("none");
    setisInputDisplayed("initial");
    

  }

  return (
    <div className='searchModule'>
      <img
        className='glassPicture'
        src={require('../assets/img/glass.png')}
        alt='loupe'
        onClick={handleClickGlass}
        style= {{display: isGlassDisplayed}}
      />
            <input className="inputSearch"
                value={search}
                type="text"
                placeholder="Recherche"
                onChange={(e) => setSearch(e.target.value)}
                style= {{display: isInputDisplayed}}
            />
            <SearchList search={search} vilainsDisplayed={vilainsDisplayed} setSearch={setSearch} setIsGlassDisplayed={setIsGlassDisplayed}/>
    </div>
  )
}

export default Search
