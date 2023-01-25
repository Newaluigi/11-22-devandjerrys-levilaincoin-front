import { ImStarFull, ImStarEmpty } from 'react-icons/im'

const Rating = ({ star }) => {
  return (
    <div className='note'>
      {star === '1' ? (
        <div>
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </div>
      ) : null}
      {star === '2' ? (
        <div>
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </div>
      ) : null}
      {star === '3' ? (
        <div>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
        </div>
      ) : null}
      {star === '4' ? (
        <div>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
        </div>
      ) : null}
      {star === '5' ? (
        <div>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </div>
      ) : null}
    </div>
  )
}
export default Rating
