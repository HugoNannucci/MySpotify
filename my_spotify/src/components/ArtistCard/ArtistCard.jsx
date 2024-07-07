import './artistcard.css';
function ArtistCard({artist, displayBio = false}){

    return (
        <div className='artist-container'>
            <div className='artist_profil'>
            <div className='img-container'>
                <img src={artist.photo}/>
            </div>
            <div>
            <div className='artis_profil__infos'>
                <p>{artist.name}</p>
            </div>
            <div>
                <p>{artist.description}</p>
            </div>
            </div>
            </div>
            <div>
                {displayBio ? (<p>{artist.bio}</p>) : null}
            </div>
        </div>
    )
}

export default ArtistCard