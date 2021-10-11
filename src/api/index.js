import axios from 'axios';

export const getPlacesdata = async (type, sw, ne) => {
    try {
        const { data : { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '1d3b60dd20msheb5bfe9225d877dp158a63jsnf26186d1ab30'
            }
          });
        return data;
    } catch (error) {
        console.error(error);
    }
}