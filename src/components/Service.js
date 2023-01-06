const Service = ({ img, details, alt }) => {
  return (
    <div className='cardService'>
      <img className='cardService-Img' src={img} alt={alt} />
      <div className='cardService-Desc'>{details}</div>
      <a href='cardService-Link'> </a>
    </div>
  )
}
export default Service
