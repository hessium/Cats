import React, {useContext, useEffect, useRef, useState} from 'react';
import CatsList from "../components/CatsList";
import {useFetching} from "../hooks/useFetching";
import CatsService from "../Api/CatsService";
import {useObserver} from "../hooks/useObserver";
import {FavoriteCatsContext} from "../context";

const Cats = () => {
    const [cats, setCats] = useState([]);
    const [limit, setLimit] = useState(15);
    const [page, setPage] = useState(1);
    const {favoriteCats, changeFavoriteCat} = useContext(FavoriteCatsContext)
    const lastElement = useRef();

    const [fetchCats, isCatsLoading, catError] = useFetching(async () => {
        const response = await CatsService.getAll(limit, page);
        setCats([...cats, ...response.data]);
    })


    useObserver(lastElement, true, isCatsLoading, () => {
        setPage(page + 1)
    })



    useEffect(() => {
        fetchCats();
    }, [page])


    return (
        <div>
            {catError &&
                <h1>Произошла ошибка {catError}</h1>
            }
            <CatsList
                cats={cats}
                likedCats={favoriteCats.map(c => c.id)}
                changeFavoriteCat={changeFavoriteCat}
            />
            <div ref={lastElement} style={{height: 5, width: '100%'}}/>
            {isCatsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px', fontSize: '24px'}}>...
                    загружаем еще котиков ...</div>
            }
        </div>
    );
};

export default Cats;