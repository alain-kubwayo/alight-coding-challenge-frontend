import axios from "axios";

export const searchData = async (search) => {
    try {
        const result = await axios.get(`https://alight-coding-challenge-backend.onrender.com/search?q=${search}`);
        const data = result.data;
        return data;
    } catch (error) {
        console.error("Error fetching search data:", error);
        throw error;
    }
}
