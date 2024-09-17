const key = 'xf2n3T5YlGeT47roLojRTbPpSUWcsgYl';
//weather info
const getWeather = async (loc) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${loc}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};
//city info
const getCity = async(city) => {


    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);

};

