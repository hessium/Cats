import './styles/header.css';
import './styles/app.css';
import { HashRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {useEffect, useState} from "react";
import {FavoriteCatsContext} from "./context";

function App() {
    const [favoriteCats, setFavoriteCats] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('favoriteCats')) {
            setFavoriteCats(JSON.parse(localStorage.getItem('favoriteCats')))
        }
    }, [])

    const changeFavoriteCat = (cat) => {
        let favCats;
        if (favoriteCats.map(c => c.id).indexOf(cat.id) === -1) {
            favCats = [...favoriteCats, cat];
        } else {
            favCats = favoriteCats.filter(c => c.id !== cat.id)
        }
        setFavoriteCats(favCats);
        localStorage.setItem('favoriteCats', JSON.stringify(favCats))
    }

    return (
        <FavoriteCatsContext.Provider value={{
            favoriteCats,
            changeFavoriteCat
        }}>
            <HashRouter>
                <NavBar/>
                <AppRouter/>
            </HashRouter>
        </FavoriteCatsContext.Provider>
    );
}

export default App;