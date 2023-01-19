import { Link } from 'react-router-dom'


const ElementListSearchbar = (props) => {
    const { vilainsDisplayed, setSearch, setIsGlassDisplayed, setisInputDisplayed } = props;
    const idVilain = vilainsDisplayed.id;

    // XXXXXXXX Click event on selected character? go to profile page XXXXXXXXXXXXXXXXXXX
    // XXXXXXXXX Mobile version close searchbar open glass picture XXXXXXXXXXXXXXXXXXXXXX
    const closeSearchList = (e) => {
        e.preventDefault()
        setisInputDisplayed('')
        setIsGlassDisplayed("")
        setSearch("")
        console.log('lllllll');
    }
    return (
        <>
            
            <div
                className='searchResult'
                key={vilainsDisplayed.id}
                onClick={closeSearchList}
                        >
                <Link to={`/profile/id/${idVilain}`}>
                    <div className='selection' >
                        <div className='vilainName'>{vilainsDisplayed.name}</div>
                        <img
                            src={vilainsDisplayed.images.xs}
                            alt={vilainsDisplayed.name}
                        />{' '}
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ElementListSearchbar;