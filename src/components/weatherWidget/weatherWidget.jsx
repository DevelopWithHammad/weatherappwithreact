import './weatherWidget.css'

function WeatherCard({ weatherData }) {
    return (
        <div className='card'>
            city name: {weatherData?.name}
            <br />
            country: {weatherData?.sys?.country}
            <br />
            Temperature: {weatherData?.main?.temp}
            <br />
            Humidity: {weatherData?.main?.humidity}
            <br />
            Humidity: {weatherData?.wind?.speed}
            <br />
            Weather: {weatherData?.weather[0]?.description}

        </div>
    )
}


export default WeatherCard