import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ShowFavorite from '../components/Showfavorite'
import ShowUser from '../components/ShowUser'
import ShowOrderHistory from '../components/ShowOrderHistory'

const UserProfilePage = () => {
  const [users, setUsers] = useState([])
  const [vilainInfo1, setVilainInfo1] = useState([])
  const [tabHistos, setTabHistos] = useState([])
  const [changeFavorite, setChangeFavorite] = useState(true)

  // const [isFavorite, setIsFavorite] = useState()

  useEffect(() => {
    const tabHistos = JSON.parse(localStorage.getItem('histo'));
    setTabHistos(tabHistos);
    setChangeFavorite(true);
    // console.log(tabHistos);
    // console.log(changeFavorite); 
  }, [changeFavorite, tabHistos.favorite])

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
                  userPhone={users.tel}
                />
              )
            })
            : null}
        </div>
        <h1 className="orderId4">Favoris</h1>
        <div className='favoriteField'>
          {tabHistos
            ?
            tabHistos.filter((vilainInfo) => vilainInfo.favorite === true)
              .map(vilainInfo => {
                return (
                  <ShowFavorite
                    vilainInfo1={vilainInfo}
                    key={vilainInfo.id}
                    changeFavorite={changeFavorite}
                    changeFavoriteStatus={event => setChangeFavorite(event)}
                    userFavorite={vilainInfo.favorite}
                    userHisto={tabHistos}
                  />
                )
              })
            : null}
        </div>
      </div>
      <div className='divTitre'>
        <h1 className="orderId3">Historique</h1>
      </div>
      {/* {console.log(changeFavorite)} */}
      <div className='orderHistory'>
        {tabHistos ?
        //  tabHistos.filter((tabHisto) => tabHisto.favorite === true)
        //  .map(tabHisto => {
           tabHistos.map(tabHisto => {
            return (
              <ShowOrderHistory
                key={tabHisto.id}
                histoName={tabHisto.name}
                histoRating={tabHisto.rating}
                histoPrice={tabHisto.montant}
                histoDate={tabHisto.date}
                histoPicture={tabHisto.images.sm} 
                histoIsFav={tabHisto.favorite}
                // gestion favori
                vilainInfo1={tabHisto}
                changeFavorite={tabHisto.favorite}
                // changeFavorite={changeFavorite}
                changeFavoriteStatus={event => setChangeFavorite(event)}
                userHisto={tabHisto}
                // isFavorite={setIsFavorite(tabHisto.favorite)}
                // changeIsFavorite={event => setIsFavorite(event)}
                />

                
            )
          })
          : null}
      </div>
    </div>
  )
}

export default UserProfilePage;


{/* <ShowFavorite
vilainInfo1={vilainInfo1}
key={vilainInfo1.id}
isFavorite={isFavorite}
changeIsFavorite={event => setIsFavorite(event)}
// fav?
userFavorite={users.favorite}
/> */}



// {tabHistos
//   ? tabHistos.map(vilainInfo => {
//     return (
//       tabHistos[0].favorite ? tabHistos.map(vilainInfo => {
//         return (
//           <ShowFavorite
//             vilainInfo1={vilainInfo}
//             key={vilainInfo.id}
//             // isFavorite={isFavorite}
//             // changeIsFavorite={event => setIsFavorite(event)}
//             // fav?
//             userFavorite={vilainInfo.favorite}
//           />
//         )
//       }) : null
//      )
//    })
//    : null} 