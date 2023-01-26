import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShowFavorite from '../components/Showfavorite'
import ShowUser from '../components/ShowUser'
import ShowOrderHistory from '../components/ShowOrderHistory'

const UserProfilePage = () => {
  const [users, setUsers] = useState([])
  const [vilainInfo1, setVilainInfo1] = useState([])
  const [tabHisto, setTabHisto] = useState([])
  const [isFavorite, setIsFavorite] = useState("isFavorite")

  useEffect(() => {
    const tab = JSON.parse(localStorage.getItem('favVilain1'));
    setVilainInfo1(tab);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

  useEffect(() => {
    const tabHisto = JSON.parse(localStorage.getItem('histo'));
    setTabHisto(tabHisto);
    console.log(tabHisto);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users'));
    setUsers(users);
    // localStorage.setItem('favorite', [1,3 ,5] ); 
  }, [])

  return (
    <div className='pageUser'>
        <div className='divTitre'>
      <h1 className="orderId1">Vos coordonnées</h1>
      <h1 className="orderId2 mobile">Favoris</h1>
      </div>
      <div className='userAndFavoriteField'>    
        <div className='user'>
          
          {users
            ? users.map(users => {
              return (
                <ShowUser
                  key={users.id}
                  userFirstName={users.firstName}
                  userLastName={users.lastName}
                  userEmail={users.email}
                  userPhone={users.tel} />
              )
            })
            : null}
        </div>
        <h1 className="orderId4">Favoris</h1>
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
      <div className='divTitre'>
      <h1 className="orderId3">Historique</h1>
      </div>
      <div className='orderHistory'>
        {tabHisto
          ? tabHisto.map(tabHisto => {
            return (
              <ShowOrderHistory
                key={tabHisto.id}
                histoName={tabHisto.name}
                histoRating={tabHisto.rating}
                histoPrice={tabHisto.montant}
                histoDate={tabHisto.date}
                histoPicture={tabHisto.images.sm} />
            )
          })
          : null}
      </div>
    </div>
  )
}

export default UserProfilePage;