import { useActionData, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TracksCard from '../../../components/TracksCard/TracksCard.jsx';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './albumdetail.scss'

function AlbumDetail(){

    const { id } = useParams();
    const [album, setAlbum] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [playTrack, setPlayTrack] = useState('');

    const getAlbum = async () => {
        await fetch(`http://localhost:8000/albums/${id}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                setAlbum(data.album);
                setTracks(data.tracks);
            });
    }

    useEffect(() => {
        getAlbum();
    }, [])

    const handleSong = (trackUrl) => {
        setPlayTrack(trackUrl)
    }


    return(
        <>
            {
                album &&
                <div id={'AlbumDetail'}>
                    <div className={'header'}>
                        <img src={album.cover}/>
                        <div className={'infos'}>
                            <div className={'title'}>{ album.name }</div>
                            <div className={'desc'}>{ album.description }</div>
                        </div>
                    </div>

                    <div className={'tracklist'}>
                        {
                            tracks.map((track, index) => <TracksCard key={uuidv4()} index={index} track={track} onClick={() => handleSong(track.mp3)} />)
                        }
                    </div>

                    <AudioPlayer
                        autoPlay
                        src={playTrack}
                        onPlay={e => console.log("onPlay")}
                    />
                </div>
            }
        </>
    )
}
export default AlbumDetail;