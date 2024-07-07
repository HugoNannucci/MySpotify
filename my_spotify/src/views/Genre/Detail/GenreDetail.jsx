import {useOutletContext, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Pagination} from "@mui/material";
import AlbumCard from "../../../components/AlbumCard/AlbumCard.jsx";
import './genredetail.scss'

function GenreDetail() {
    const { id } = useParams()

    const [ genreData, setGenreData ] = useState(false)
    const [ page, setPage ] = useState(1);

    const getInfosGenre = async () => {
        try {
            await fetch(`http://127.0.0.1:8000/genres/${id}`)
                .then(res => res.json()).then(data => {
                    setGenreData(data)
                })
        } catch (error) {
            console.error('Erreur lors de la récupération des genres : ', error)
        }
    }

    const handlePageChange = (event, value) => {
        setPage(value)
    };

    useEffect(() => {
        getInfosGenre()
    }, []);

    const getAlbumsWithPaginate = () => {
        let offset = (page - 1) * 21

        return genreData.albums.slice(offset, offset + 21);
    }

    return (
        <>
            {
                genreData &&

                <div id={'GenreDetail'}>
                    <div className={'title'}>{ genreData.genre.name }</div>

                    <div className={'albums'}>
                        {
                            getAlbumsWithPaginate().map((album) => {
                                return <AlbumCard key={album} album={album}  />
                            })
                        }
                    </div>

                    <Pagination count={Math.ceil(genreData.albums.length / 21)} page={page} onChange={handlePageChange}/>
                </div>
            }
        </>
    )
}

export default GenreDetail