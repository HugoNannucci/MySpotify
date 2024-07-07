import {useState, useEffect} from "react"
import ArtistCard from "../../../components/ArtistCard/ArtistCard"
import { useParams } from "react-router"
import AlbumList from "../../Albums/Listing/AlbumList"
import './artistdetails.css'

function ArtistDetails(){
    const {id} = useParams()
    const [details, setDetails] = useState([])
    const getArtistDetails = async () => {
        try {
          await fetch(`http://localhost:8000/artists/${id}`)
            .then(res => res.json()).then(data => {
              setDetails(data)
            })
        } catch (error) {
          console.error('Erreur lors de la récupération des artistes : ', error)
        }
      }
      useEffect(() => {
        getArtistDetails()
    }, [])


    return (
        <div className="artist_details">
        <ArtistCard artist={details} displayBio={true}/>
        <AlbumList/>
        </div>

    )
}

export default ArtistDetails