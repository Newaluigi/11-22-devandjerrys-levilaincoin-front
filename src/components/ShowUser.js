import ABdou from"../assets/img/Abdou.png" 

const ShowUser = (props) => {
    const {userFirstName, userLastName, userEmail, userPhone} = props
    return (
        <div className="coord">
            <img className="userPicture" src={ABdou} alt="User"/>
            <p className="detail">Prénom: {userFirstName}</p>
            <p className="detail">Nom: {userLastName}</p>
            <p className="detail">Email: {userEmail}</p>
            <p className="detail">Téléphone: {userPhone}</p>
           <button className="modifyDetail">Modifier</button>
        </div>
    )
}
export default ShowUser