import './genrecard.scss'
import {useNavigate, useOutletContext} from "react-router-dom";

function GenreCard({ genre, color }) {
    const navigate = useNavigate()
    const { backgroundRef } = useOutletContext()

    const handleGotoDetail = () => {
        backgroundRef.current.style.backgroundColor = color
        navigate(`/genres/${genre.id}`)
    }

    return (
        <div id={"GenreCard"} style={{ backgroundColor: color }} onClick={handleGotoDetail}>
            <div className={"name"}>{ genre.name }</div>
        </div>
    )
}

export default GenreCard