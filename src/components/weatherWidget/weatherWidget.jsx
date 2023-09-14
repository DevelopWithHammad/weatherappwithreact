import './weatherWidget.css'

function WeatherCard({ weatherData }) {
    return (
        <div className='card'>
            <div className='cityName'>{weatherData?.name}</div>
            <br />

            <div className='country'>{weatherData?.sys?.country}</div>
            <br />

            <div className='temp'>{Math.rounweatherData?.main?.temp}°C</div>
            <br />

            <div className='humidity'>{weatherData?.main?.humidity}</div>
            <br />

            <div className='wind'>{weatherData?.wind?.speed}</div>
            <br />

            <div className='weather'>{weatherData?.weather[0]?.description}</div>

        </div>
    )
}


export default WeatherCard