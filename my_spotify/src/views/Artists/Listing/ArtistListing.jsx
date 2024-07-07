import { useState, useEffect } from "react"
import ArtistCard from "../../../components/ArtistCard/ArtistCard"
import { Pagination } from '@mui/material';
import './artistlisting.css';
import { Link } from "react-router-dom";


function ArtistListing() {
    const [page, setPage] = useState(1);
    const [artists, setArtist] = useState([])
    const getArtists = async (pageNum) => {
        try {
          await fetch(`http://localhost:8000/artists?page=${pageNum}`)
            .then(res => res.json()).then(data => {
              setArtist(data)
            })
        } catch (error) {
          console.error('Erreur lors de la récupération des artistes : ', error)
        }
      }
      const handlePageChange = (event, value) => {
        document.getElementById('artistlisting-content').parentNode.scrollTo(0,0)
        
        setPage(value)
        getArtists(value)
    };

      useEffect(() => {
        getArtists(page)
    }, [page])

      return (
      <div className="artist-listing_content" id="artistlisting-content">
        {artists.map(artist => (
          <Link to={'/artists/'+artist.id } key={artist.id+'link'} className="artist_link">
            <ArtistCard key={artist.id+'artist'} artist={artist}/>
          </Link>
        ))}
        <Pagination count={34} page={page} onChange={handlePageChange}/>
      </div>
      )
}

export default ArtistListing