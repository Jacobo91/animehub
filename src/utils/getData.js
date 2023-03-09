


async function getData() {
    const baseUrl = 'https://anime-db.p.rapidapi.com/anime?page=1&size=12&sortBy=ranking&sortOrder=asc';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(baseUrl, options);
        if (response.ok) {
            const jsonResponse = await response.json();
            const animeData = jsonResponse.data
            return animeData
        }
    }
    catch (error) {
        console.log(error)
    }
}

export default getData;