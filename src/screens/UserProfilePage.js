import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShowFavorite from '../components/Showfavorite'
import ShowUser from './ShowUser'

const UserProfilePage = () => {
  const [users, setUsers] = useState([])
  const [vilainInfo1, setVilainInfo1] = useState([])
  const [tabHisto, setTabHisto] = useState([])
  const [isFavorite, setIsFavorite] = useState("isFavorite")
  // axios.get('http://localhost:4242/selection/id/2').then(response => {
  //   if (isFavorite !== "isFavorite") {
  //     setVilainInfo1(response.data);
  //   } else {
  //     (isFavorite === "isFavorite")
  //     setVilainInfo1(response.data);
  //   }

  // useEffect(() => {
  //   axios.get('http://localhost:4242/customers').then(response => {
  //     setCustomers(response.data);
  //     console.log(customers);
  //     // console.log("rrrr"+response.data);
  //   })
  // }, [])

  useEffect(() => {
    const tab = JSON.parse(localStorage.getItem('favVilain1'));
    setVilainInfo1(tab);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

  useEffect(() => {
    const tabHisto = JSON.parse(localStorage.getItem('histo'));
    setTabHisto(tabHisto);
    // console.log(tabHisto);
    // console.log(tabHisto);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    setUsers(users);
    console.log( users);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

  return (
    <div>
      <div className='user'>
      
      <ShowUser
      user = {users}/>
    
      </div>
      <div className='favoriteField'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo1 => {
            return (
              <ShowFavorite
                vilainInfo1={vilainInfo1}
                key={vilainInfo1.id}
                isFavorite={isFavorite}
                changeIsFavorite={event => setIsFavorite(event)}
              />
            )
          })
          : null}
      </div>
    </div>
  )
}

export default UserProfilePage;