import './trackscard.scss'

function TracksCard({ onClick, index, track }){

    console.log(track)

    return(
        <div id="track" onClick={ onClick }>
            <div className={'title'}>
                <a>{ index + 1 }</a>
                <a>{ track.name }</a>
            </div>
            <div>{ track.duration }</div>
        </div>
    )
}
export default TracksCard;