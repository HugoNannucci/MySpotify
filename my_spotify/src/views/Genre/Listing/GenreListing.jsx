import {useEffect, useState} from "react";
import GenreCard from "../../../components/GenreCard/GenreCard.jsx";
import './genrelisting.scss'
import randomColor from "randomcolor";
import {useOutletContext} from "react-router-dom";

function GenreListing() {

    const [ genres, setGenres ] = useState([])
    const getGenreLists = async () => {
        try {
            await fetch(`http://127.0.0.1:8000/genres`)
                .then(res => res.json()).then(data => {
                    setGenres(data)
                })
        } catch (error) {
            console.error('Erreur lors de la récupération des genres : ', error)
        }
    }

    const { backgroundRef } = useOutletContext()

    useEffect(() => {
        getGenreLists()

        backgroundRef.current.style.backgroundColor = ''
    }, [])
    animals.push
    return (
        <div id={'GenreListing'}>
            <div className={'title'}>Listes des genres</div>

            <div className={'lists'}>
                {
                    genres.map((genre) => {
                        return <GenreCard key={genre.id} genre={genre} color={randomColor()} />
                    })
                }
            </div>
        </div>
    )
}

export default GenreListing