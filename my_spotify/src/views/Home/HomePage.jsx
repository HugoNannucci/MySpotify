import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function HomePage() {
    const [listAlbums, setListAlbums] = useState([]);
    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1 ;
      }
      
      const page = getRandomInt(10);   
    const getAlbums = async () => {
        await fetch(`http://localhost:8000/albums?page=${page}&limit=69`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListAlbums(data);

            });


    }
    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <ul id="listing-accueil">
            {listAlbums.map(album => (
                <div key={uuidv4()} className="album-listed">
                    <Link to={`/albums/${album.id}`}  > <img src={album.cover_small} className="album-image" ></img></Link>
                </div>
            ))}
        </ul>
    )
}

export default HomePage