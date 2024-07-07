import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import PreviewCard from "../../../components/AlbumCard/PreviewCard";
import './albumlist.css';
import { Link } from "react-router-dom";
function AlbumList(){
    const {id} = useParams()
    console.log(id)
    const [albums, setAlbums] = useState([]);
    const getAlbumPreview = async () => {
        try {
          await fetch(`http://localhost:8000/albums/artist/${id}`)
          .then(res => res.json()).then(data =>
            setAlbums(data)
            )
        } catch (error) {
          console.error('Erreur lors de la récupération des artistes : ', error)
        }
      }
      useEffect(() => {
        getAlbumPreview()
    }, [])
    
    
    
    return(
        <div className="album-content">
        {
            albums.map(album => (
                <Link to={'/albums/'+album.id} key={album.id}>
                    <PreviewCard key={album.id+'albums'} album={album}/>
                </Link>
            ))
        }
        </div>

    )
}
export default AlbumList