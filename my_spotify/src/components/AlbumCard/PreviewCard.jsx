import './previewcard.css';
function PreviewCard({album}){
    return (
        <div className="album-container">
            <div className="album-container__img">
            <img src={album.cover_small} alt="" />
            </div>
            <div className="album-container__name">
                <p>{album.name}</p>
                </div>
            <div>
            <p>{album.release_date}</p>
            </div>
            <div>
            <p>{album.popularity}</p>
            </div>
        </div>
    )
}

export default PreviewCard