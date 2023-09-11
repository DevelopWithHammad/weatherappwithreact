import axios from 'axios';
import { useState, useRef } from 'react';

const Home = () => {
    //   const [cityName, setCityName] = useState("");




    const cityNameRef = useRef(null)
    const [weatherData, setWeatherData] = useState({}); // State to store weather data
    const API_KEY = "e0f99c494c2ce394a18cc2fd3f100543";

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("CityName:", cityNameRef.current.value);

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&appid=${API_KEY}&units=metric`);
            setWeatherData(response.data); // Set the weather data in state
            console.log(response.data);
            setWeatherData(response.data)
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter any city name"
                    id="cityInput"
                    required
                    minLength={2}
                    maxLength={20}
                    //   onChange={(e) => setCityName(e.target.value)}
                    ref={cityNameRef}
                />
                <button type="submit">Check Weather</button>
            </form>

            <hr />

            {(weatherData) ? <div>
                <h2>Weather in {weatherData?.name}, {weatherData?.sys?.country}</h2>
                <p>Temperature: {weatherData?.main?.temp}°C</p>
                {/* <p>Weather: {weatherData?.weather[0]?.description}</p> */}
            </div>
                :
                (<div>No City found</div>)}



        </div>
    );
};

export default Home;
