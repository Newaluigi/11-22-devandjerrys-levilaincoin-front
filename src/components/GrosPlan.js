import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'
import { useParams } from 'react-router-dom'


const GrosPlan = () => {
const params = useParams();

  const [vilainInfo1, setVilainInfo1] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:4242/selection/id/${params.idVilain}`).then(response => {
    // axios.get(`http://localhost:4242/selection/name/${params.nameVilain}`).then(response => {
      // console.log(params.nameVilain);
      setVilainInfo1(response.data)
      console.log(params);
    })
  }, [])

  return (
    <div>
      
      <div className='posts'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo1 => {
              return (
                <DisplayVilainServicePage
                // ---------- Props --------------
                  vilainInfo1={vilainInfo1}
                />
              )
            })
          : null}
      </div>

      </div>
      );
};

      export default GrosPlan