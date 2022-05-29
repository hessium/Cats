import React from 'react';
import '../styles/catsList.css';

const CatsList = ({cats, changeFavoriteCat, likedCats}) => {
    return (
        <div className='cats-list'>
            {cats.map((cat, i) =>
                <div key={i + cat.id} className='cat'>
                    <img
                        src={cat.url}
                        alt="cat"
                        width={225}
                        height={225}
                    />
                    <div
                        className={likedCats.indexOf(cat.id) === -1 ? 'heart' : 'heart active'}
                        onClick={() => changeFavoriteCat(cat)}
                    />
                </div>
            )}
        </div>
    );
};

export default CatsList;