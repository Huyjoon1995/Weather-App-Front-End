import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkerAlt, faTint, faWind, faTemperatureHigh, faTemperatureLow, faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface WeatherProperty {
    zipcode: string,
    date: string,
    city: string,
    country: string,
    temp: number,
    description: string,
    icon: string,
    humidity: number,
    wind_speed: number,
    temp_min: number,
    temp_max: number, 
    visibility: number  
}
export default class Weather extends React.Component<WeatherProperty> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const propsDateSubstring: string = this.props.date.substr(0, this.props.date.indexOf(' '));
        const day = days.find(element => element.includes(propsDateSubstring));
        return (
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient">
                        <div className="date-container">
                            <h2 className="date-dayname">{day}</h2>
                            <span className="date-day"><FontAwesomeIcon icon={faCalendarAlt} /> {this.props.date.substr(this.props.date.indexOf(' ') + 1)}</span>
                            <span className="location"><FontAwesomeIcon icon={faMapMarkerAlt} /> {this.props.city + ", " + this.props.country}</span>

                        </div>
                        <div className="weather-container">
                            <img src={"http://openweathermap.org/img/w/" + this.props.icon + ".png"} alt="Weather Icon"></img>
                            <h1 className="weather-temp">{this.props.temp + '\u00b0'}C</h1>
                            <h3 className="weather-desc"> {this.props.description}</h3>
                        </div>

                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="row">
                                <span><FontAwesomeIcon icon={faTint} /> { this.props.humidity } %</span>
                            </div>
                            <div className="row">
                                <span><FontAwesomeIcon icon={faWind} /> { this.props.wind_speed } m/s</span>
                            </div>
                            <div className="row">
                                <span><FontAwesomeIcon icon={faTemperatureHigh} /> { this.props.temp_max + '\u00b0'}C</span>
                            </div>
                            <div className="row">
                                <span><FontAwesomeIcon icon={faTemperatureLow} /> { this.props.temp_min + '\u00b0'}C</span>
                            </div>
                            <div className="row">
                                <span><FontAwesomeIcon icon={faEye} /> { this.props.visibility } m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}