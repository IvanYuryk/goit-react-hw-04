import axios from "axios";

const fetchImages = async (query, page) => {
    try {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos`,
            {
                params: {
                    query: query,
                    page: page,
                    client_id: "DWEIFMTlPfAxVuojH75lzqhCc2a8uuC5lBy8fDIH4sA",
                },
            }
        );
        return response.data.results;
    } catch (error) {
        throw new Error("Failed to fetch images");
    }
};

export { fetchImages };
