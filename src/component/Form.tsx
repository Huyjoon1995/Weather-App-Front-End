import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface FormPropInterface {
    onSearchCallBack: (
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
    ) => void
}
export default class Form extends React.Component<FormPropInterface> {
    constructor(props: any) {
        super(props);
        this.state = {
            zipcode: "",
            isLoaded: false,
            date: "",
            city: "",
            country: "",
            temp: 0,
            description: "",
            icon: "",
            humidity: 0,
            wind_speed: 0,
            temp_min: 0,
            temp_max: 0,
            visibility: 0
        }
    }

    userInput: any;
    handleSubmit(e: any) {
        let that = this;
        e.preventDefault();
        this.setState({
            zipcode: that.userInput
        }, () => {
            fetch("https://weatherapp20201124220444.azurewebsites.net/api/WeatherMonitoring?code=PTlxwzR/Fy3Orm7ASb1nLvnVuKIg6srb7GRpSnGPE2wjRRD2aALDyQ==&zipcode=" + that.userInput)
                .then(res => res.json())
                .then(
                    (result) => {
                        let date = new Date(result.dt * 1000);
                        let celcius = Math.round(result.main.temp - 273.15);
                        let temp_min_celcius = Math.round(result.main.temp_min - 273.15);
                        let temp_max_celcius = Math.round(result.main.temp_max - 273.15);
                        this.setState({
                            zipcode: that.userInput,
                            isLoaded: true,
                            date: date.toDateString(),
                            city: result.name,
                            country: result.sys.country,
                            temp: celcius,
                            description: result.weather[0].description,
                            icon: result.weather[0].icon,
                            humidity: result.main.humidity,
                            wind_speed: result.wind.speed,
                            temp_min: temp_min_celcius,
                            temp_max: temp_max_celcius,
                            visiblity: result.visibility
                        }, () => {
                            that.props.onSearchCallBack(
                                that.userInput,
                                date.toDateString(),
                                result.name,
                                result.sys.country,
                                celcius,
                                result.weather[0].description,
                                result.weather[0].icon,
                                result.main.humidity,
                                result.wind.speed,
                                temp_min_celcius,
                                temp_max_celcius,
                                result.visibility
                            );
                        });

                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        });
    }

    handleInput(e: any) {
        this.userInput = e.target.value;
    }
    render() {
        return (
            <form className="zipcode" onSubmit={e => this.handleSubmit(e)}>
                <input className="zipcode-input" type="text" placeholder="Enter zipcode" onChange={e => this.handleInput(e)} />
                <button className="location-button" type="submit"><FontAwesomeIcon icon={faMapMarkerAlt} /> Search</button>
            </form>
        )
    }

}
