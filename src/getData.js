export const getData = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '584cee3d4cmshbc7ed3c23b24627p11e5c4jsn1dfbb3334930',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    const baseURL = 'https://anime-db.p.rapidapi.com/anime?page=1&size=40&sortOrder=asc';

    try{
        const response = await fetch(baseURL, options)
        if (response.ok){
            const jsonResponse = await response.json()
            const data = jsonResponse.data
            return data
        }
    }
    catch(error){
        console.log(error.message)
    }
}