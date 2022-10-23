import './forecast.css';

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];

const Forecast = ({data}) => {
    const today = new Date().getDay();
    const forecastDay = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, today));     
    return (
        <>
            <label className="title">Forecast:</label>
            <div>                              
                {data.list.splice(0, 7).map((item, i) => {
                    return (<div className="forecast-container" key={i}>
                        <div className="forecast-item">
                            <label className="day">{forecastDay[i]}</label>
                            <div className="forecast-desc">{item.weather[0].description}</div>
                            <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                            <div className="temp">
                                <div>Min Temp - <span className="min-temp">{Math.round(item.main.temp_min)}°C</span></div>
                                <div>Max Temp - <span className="max-temp">{Math.round(item.main.temp_max)}°C</span></div>
                            </div>
                            <div className="other-details">                                
                                <div>Pressure - {item.main.pressure} hPa</div>
                                <div>Humidity - {Math.round(item.main.humidity)}%</div>
                                <div>Wind - {item.wind.speed} m/s</div>
                            </div>
                        </div>
                    </div>)
                })}    
            </div>   
        </>
    )
}

export default Forecast;