import React from "react"
import Weather from "./component/Weather";
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "./component/Form";
interface AppState {
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
class App extends React.Component<any, AppState> {
  constructor(props: any) {
    document.title = "Weather Monitoring App";
    super(props);
    this.state = {
      zipcode: "",
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
    };
  }
  onSearchCallBack(
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
  ): void {
    this.setState({
      zipcode: zipcode,
      date: date,
      city: city,
      country: country,
      temp: temp,
      description: description,
      icon: icon,
      humidity: humidity,
      wind_speed: wind_speed,
      temp_min: temp_min,
      temp_max: temp_max,
      visibility: visibility
    });
  };

  render() {
    return (
      <React.Fragment>

        <div className="row">
          <div className="col-md-6">
            <h2 className="title">Weather-App</h2>
          </div>
          <div className="col-md-6">
            <Form onSearchCallBack={(zipcode, date, city, country, temp, description, icon, humidity, wind_speed, temp_min, 
              temp_max, visibility) => { this.onSearchCallBack(zipcode, date, city, country, temp, description, icon, 
              humidity, wind_speed, temp_min, temp_max, visibility) }} />
          </div>
        </div>
        <div className="row">
          {this.state.zipcode.length === 5 && <Weather zipcode={this.state.zipcode} date={this.state.date} city={this.state.city}
            country={this.state.country} temp={this.state.temp} description={this.state.description} icon={this.state.icon} 
            humidity = { this.state.humidity } wind_speed = { this.state.wind_speed } temp_min = { this.state.temp_min } 
            temp_max = { this.state.temp_max } visibility = { this.state.visibility }
            />}
        </div>

      </React.Fragment>
    );
  }
}
export default App;
