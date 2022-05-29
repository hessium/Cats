import React, {useContext} from 'react';
import CatsList from "../components/CatsList";
import {FavoriteCatsContext} from "../context";

const FavoriteCats = () => {
    const {favoriteCats, changeFavoriteCat} = useContext(FavoriteCatsContext)

    return (
        <div>
            <CatsList
                likedCats={favoriteCats.map(c => c.id)}
                cats={favoriteCats}
                changeFavoriteCat={changeFavoriteCat}
            />
        </div>
    );
};

export default FavoriteCats;