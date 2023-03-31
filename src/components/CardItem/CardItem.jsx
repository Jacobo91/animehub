


export default  function CardItem({ anime, children }){

    return(
        <div className="card" key={anime._id} >
            <img src={anime.image} alt={anime.name} className="card--img" />
            <div className="card--title"  >
                <p>{anime.title}</p>
                <p>{anime.type}</p>
            </div>
            {children}
        </div>
    )
}

/*

            <button
                className="bookmark-btn"
                onClick={() => handleAddFavorite(anime)}
            >
                <i className={`fa-regular fa-bookmark`}></i>
            </button>
            <button
                className="bookmark-btn"
                onClick={() => handleRemoveFavorite(anime)}
            >
                <i className={`fa-solid fa-x`}></i>
            </button>

*/