import './SearchBar.scss';
import SearchSvg from '../../assets/navbar/search.svg';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import GenreCard from '../GenreCard/GenreCard';
import randomColor from "randomcolor";

function SearchBar() {

    const [datas, setDatas] = useState([]);
    const [Type, setType] = useState("artist");
    const [Search, setSearch] = useState("");

    const getSearch = async () => {
        try {
            const response = await fetch(`http://localhost:8000/search?query=${Search}&type=${Type}`);
            const data = await response.json();
            if (Type === "artist") {
                setDatas(data.artists);
            } else if (Type === "genre") {
                setDatas(data.genres);
            } else if (Type === "album") {
                setDatas(data.albums);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données : ', error);
        }
    }

    useEffect(() => {
        if (Search) {
            getSearch();
        }
    }, [Search, Type]);

    const handleSearch = (e) => {
        let value = e.target.value;
        value.length > 0 && setSearch(value);
    }

    const renderData = () => {
        if (Type === "artist") {
            return datas.map((artist) => (
                <Link to={'/artists/'+artist.id } key={artist.id+'link'} className="artist_link">
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
                </div>
            </Link>
            ));
        } else if (Type === "genre") {
            return (datas.map((genre) => (
                <div className={'list'}>
                    <GenreCard key={genre.id} genre={genre} color={randomColor()}  />
                </div>
            )))
        } else if (Type === "album") {
            return datas.map((album) => (
                <div id="listing-accueil">
                {datas.map(album => (
                    <div key={uuidv4()} className="album-listed">
                        <Link to={`/albums/${album.id}`}>
                            <img src={album.cover_small} className="album-image" alt={album.title} />
                        </Link>
                    </div>
                ))}
                </div>
            ));
        }
    }

    return (
        <>
            <div id='SearchBar__container'>
                <SearchSvg className={`icons`} />
                <input
                    type="text"
                    name="SearchBar"
                    id="SearchBar"
                    placeholder="Rechercher"
                    onChange={handleSearch}
                />
                <select value={Type} onChange={e => setType(e.target.value)}>
                    <option value="artist">Artist</option>
                    <option value="genre">Genre</option>
                    <option value="album">Album</option>
                </select>
            </div>
                {renderData()}
        </>
    );
}

export default SearchBar;
