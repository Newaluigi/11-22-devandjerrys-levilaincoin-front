import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import DetailedCardService from '../screens/DetailedCardService'

const Profile = () => {
  const params = useParams()

  const [vilainInfo1, setVilainInfo1] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/selection/id/${params.idVilain}`)
      .then(response => {
        // axios.get(`http://localhost:4242/selection/name/${params.nameVilain}`).then(response => {
        // console.log(params.nameVilain);
        setVilainInfo1(response.data)
        console.log(params)
      })
  }, [params])

  return (
    <div>
      <div className='posts'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo1 => {
              return <DetailedCardService vilainInfo1={vilainInfo1} />
            })
          : null}
      </div>
    </div>
  )
}

export default Profile
