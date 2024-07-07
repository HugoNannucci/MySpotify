import {useEffect, useState} from "react";
import './albumcard.scss'
import {useNavigate} from "react-router-dom";

function AlbumCard({ album }) {
    const navigate = useNavigate()

    const [ albumInfos, setAlbumInfos ] = useState()

    const getInfosAlbum = async () => {
        try {
            await fetch(`http://127.0.0.1:8000/albums/${album}`)
                .then(res => res.json())
                .then(data => {
                    setAlbumInfos(data)
                })
        } catch (error) {
            console.error('Erreur lors de la récupération des genres : ', error)
        }
    }

    useEffect(() => {
        getInfosAlbum()
    }, []);

    const handleGotoAlbum = () => {
        navigate(`/albums/${albumInfos?.album?.id}`)
    }

    return (
        <div id={'AlbumCard'} onClick={handleGotoAlbum}>
            <img src={ albumInfos?.album?.cover }/>
            <div className={'name'}>{ albumInfos?.album?.name }</div>
            <div className={'description'}>{ albumInfos?.album?.description }</div>
        </div>
    )
}

export default AlbumCard