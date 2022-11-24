import axios from 'axios';

    
    const apiKey = "3bd17d30c9cf309f9cbf592bee440b1d";
   
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}