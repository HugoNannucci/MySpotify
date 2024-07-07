import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home/HomePage.jsx";
import Layout from "./views/Layout.jsx";
import AlbumListing from "./views/Albums/Listing/AlbumListing.jsx";
import AlbumDetail from "./views/Albums/Detail/AlbumDetail.jsx";
import ArtistListing from "./views/Artists/Listing/ArtistListing.jsx";
import GenreDetail from "./views/Genre/Detail/GenreDetail.jsx";
import GenreListing from "./views/Genre/Listing/GenreListing.jsx";
import SearchPage from "./views/Search/SearchPage.jsx";
import ArtistDetails from "./views/Artists/Detail/ArtistDetail.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route path="/accueil" element={ <HomePage /> } />

                    <Route path="/albums" exact element={ <AlbumListing/> } />
                    <Route path="/albums/:id" element={ <AlbumDetail/> } />

                    <Route path="/genres" exact element={ <GenreListing/> } />
                    <Route path="/genres/:id" element={ <GenreDetail/> } />

                    <Route path="/artists" exact element={ <ArtistListing/> } />
                    <Route path="/artists/:id" element={<ArtistDetails/>}  />
                    <Route path="/search" element={ <SearchPage/> } />
                </Route>
            </Routes>
        </Router>
    )
}

export default App