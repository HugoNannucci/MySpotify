import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

function AlbumListing() {

    const [listAlbums, setListAlbums] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(9);

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const response = await fetch(`http://localhost:8000/albums?page=${currentPage}&limit=${perPage}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch albums');
                }
                const data = await response.json();
                console.log(data);
                setListAlbums(data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        getAlbums();
    }, [currentPage, perPage]);

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div id="listing-accueil">
            {listAlbums.map(album => (
                <div key={uuidv4()} className="album-listed">
                    <Link to={`/albums/${album.id}`}>
                        <img src={album.cover_small} className="album-image" alt={album.title} />
                    </Link>
                </div>
            ))}
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
}

export default AlbumListing;
