import {Navigate} from "react-router-dom";
import Cats from "../../pages/Cats";
import FavoriteCats from "../../pages/FavoriteCats";


export const routes = [
    {path: '/', component: <Cats />, exact: false},
    {path: '/favorite', component: <FavoriteCats />, exact: false},
    {path: '*', component: <Navigate to='/' />, exact: false}
]