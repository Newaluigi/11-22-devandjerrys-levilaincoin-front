import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShowFavorite from '../components/Showfavorite'
const UserProfilePage = () => {
  const [customers, setCustomers] = useState([])
  const [vilainInfo1, setVilainInfo1] = useState([])
  const [vilainInfo2, setVilainInfo2] = useState(["jkj"])
  const [isFavorite, setIsFavorite] = useState("isFavorite")


  useEffect(() => {
    // axios.get('http://localhost:4242/selection/id/2').then(response => {
    //   if (isFavorite !== "isFavorite") {
    //     setVilainInfo1(response.data);
    //   } else {
    //     (isFavorite === "isFavorite")
    //     setVilainInfo1(response.data);
    //   }


        const tab = JSON.parse(localStorage.getItem('favVilain1'));
       
            setVilainInfo1(tab);
        console.log(tab);
        console.log(vilainInfo1);
        // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])



  useEffect(() => {
    axios.get('http://localhost:4242/customers').then(response => {
      setCustomers(response.data)
    })
  }, [])

  return (
    <div>
      <div className='pp'>
        <p>DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD {vilainInfo1.name}</p>
      </div>

      {vilainInfo1
        ? vilainInfo1.map(vilainInfo1 => {
          return (

            <ShowFavorite
              vilainInfo1={vilainInfo1}
              // key={vilainInfo1.id}
              isFavorite={isFavorite}
              changeIsFavorite={event => setIsFavorite(event)}
            />
         )
        })
        : null}
    </div>
  )
}

export default UserProfilePage;