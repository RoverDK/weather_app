import windImg from "../../../icons/wind.png"
import humidityImg from "../../../icons/humidity.png"

import '../styles/index.css'

export function InfoLayout({city, temp, humidity, wind}) {
    return (
            <div className="infoCard">
                <p id="city">{city}</p>
                <div className="info">
                    <div className="info__temp">
                        <p>TEMPERATURE</p>
                        <p id="temp">{temp}°</p>
                    </div>
                    <div className="info__extra">
                        <div>
                            <img className="icon" src={humidityImg} alt="humidity" />
                            <p>{humidity}</p>
                        </div>
                        <div>
                            <img className="icon" src={windImg} alt="wind" />
                            <p>{wind}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}