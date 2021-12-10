
export const getGifs = async (category) => {
    const apiKey = "Ftmx0ADU6kkfDNb7tRGbwbieRvlpdZc0";
    const resp = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}

export default getGifs;