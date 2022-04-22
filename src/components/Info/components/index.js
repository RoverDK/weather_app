import windImg from "../../../icons/wind.png"
import humidityImg from "../../../icons/humidity.png"
import precipitationImg from "../../../icons/rain.png"
import {iconList} from "../../../icons/icon"

import '../styles/index.css'

export function InfoLayout({city, temp, weatherType, humidity, wind, precipitation, icon}) {
    return (
            <div className="container">
                <div className="card-info">
                    <div className="card-info-front">
                        <div className="main-info">
                            <p className="main-info__city">{city}</p>
                            <p className="main-info__temp">{temp}°</p>
                        </div>
                        <div className="extra-info">
                            <img className="icon" src={iconList[icon]} alt="" />
                            <p className="extra-info__type">{weatherType}</p>
                        </div>
                    </div>
                    <div className="card-info-back">
                        <div className="weather-element">
                            <img className="icon-back" src={humidityImg} alt="" />
                            <p>{humidity}<span> %</span></p>
                        </div>
                        <div className="weather-element">
                            <img className="icon-back" src={windImg} alt="" />
                            <p>{wind}<span> km/h</span></p>
                        </div>
                        <div className="weather-element">
                            <img className="icon-back" src={precipitationImg} alt="" />
                            <p>{precipitation}<span> mm</span></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}