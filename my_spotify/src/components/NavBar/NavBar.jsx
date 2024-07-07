import './navbar.scss'
import HomeSvg from "../../assets/navbar/home.svg.jsx";
import SearchSvg from "../../assets/navbar/search.svg.jsx";
import AlbumsSvg from "../../assets/navbar/albums.svg.jsx";
import ArtistesSvg from "../../assets/navbar/artistes.svg.jsx";
import GenreSvg from "../../assets/navbar/genre.svg.jsx";
import LogoSpotify from '../../assets/spotify_logo.png'
import {useLocation, useNavigate} from "react-router-dom";

function NavBar() {
    const location = useLocation()
    const navigate = useNavigate()

    const CurrentPath = (name) => {
        console.log(location.pathname, name)
        if (location.pathname === name)
            return 'active'

        return ''
    }

    const handleSwitchPage = (path) => {
        navigate(path)
    }

    return (
        <div id={'NavBar'}>
            <div className={'app_name'}>
                <img src={LogoSpotify} />
            </div>

            <div className={'lists'}>
                <div className={'categories'}>
                    <div className={`items ${CurrentPath('/accueil')}`} onClick={() => handleSwitchPage('/accueil')}>
                        <HomeSvg className={`icons`}/>
                        Accueil
                    </div>

                    <div className={`items ${CurrentPath('/search')}`} onClick={() => handleSwitchPage('/search')}>
                        <SearchSvg className={`icons`}/>
                        Recherche
                    </div>
                </div>

                <div className={'categories'}>
                    <div className={`items ${CurrentPath('/genres')}`} onClick={() => handleSwitchPage('/genres')}>
                        <GenreSvg className={`icons`}/>
                        Genre Musical
                    </div>
                    <div className={`items ${CurrentPath('/albums')}`} onClick={() => handleSwitchPage('/albums')}>
                        <AlbumsSvg className={`icons`}/>
                        Albums
                    </div>
                    <div className={`items ${CurrentPath('/artists')}`} onClick={() => handleSwitchPage('/artists')}>
                        <ArtistesSvg className={`icons`}/>
                        Artistes
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar