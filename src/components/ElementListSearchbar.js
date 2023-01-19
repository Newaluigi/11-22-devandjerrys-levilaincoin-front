import { Link } from 'react-router-dom'


const ElementListSearchbar = (props) => {
    const { vilainsDisplayed, setSearch, setIsGlassDisplayed } = props;
    const idVilain = vilainsDisplayed.id;

    // XXXXXXXXXXXXXXXXXXXXXX Click event on selected character XXXXXXXXXXXXXXXXXXXXXXXXX
    const closeSearchList = (e) => {
        e.preventDefault()
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