import axios from 'axios';
import { useState, useRef } from 'react';
import WeatherCard from '../weatherWidget/weatherWidget.jsx';
import './home.css'

const Home = () => {

    const cityNameRef = useRef(null)

    const [weatherData, setWeatherData] = useState(null); // State to store weather data

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
        <div className='mainContainer'>
            <form onSubmit={submitHandler}>
                <div className='formHead'>
                <input className='inputCityName'
                    type="text"
                    placeholder="Enter any city name"
                    id="cityInput"
                    required
                    minLength={2}
                    maxLength={20}
                    //   onChange={(e) => setCityName(e.target.value)}
                    ref={cityNameRef}
                />
                <button type="submit" className='submitBtn'>Check Weather</button>
                </div>
            </form>

            {/* <hr /> */}

            {weatherData ? 
                <WeatherCard weatherData={weatherData} />
             : (
                <div> </div>
            )
            } 


            



        </div>
    );
};

export default Home;
