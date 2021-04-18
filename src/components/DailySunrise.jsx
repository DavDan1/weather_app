import React, { Component } from "react";
import axios from "axios";
import { Container , Grid} from "semantic-ui-react";
import Moment from "react-moment";
import "moment-timezone";
import Weatherforecast from "./WeatherForecast";

class DailySunrise extends Component {
  state = {
    geolocation: {},
    location: {},
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const openCageKey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
      const openWeatherMapKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

      let { latitude, longitude } = position.coords;
      let locationResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=${openCageKey}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`
      );
      let weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapKey}&units=metric`
      );
      let weatherInfo = {
       
        sunrise: weatherResponse.data.daily.sunrise,
        sunaser: weatherResponse.data.daily.sunset,
      
      };

      this.setState({ location: weatherInfo });
    });
  }

  render() {
    
    const sunrise= this.state.location.daily.sunrise,

    return (
     
        <Container>
          <Grid.Column>
        <Moment data-cy="sunrise" unix format="HH:mm">
                  {sunrise}
                </Moment>
              Sunrise next 7 Days
              <Weatherforecast data={this.state.location.daily.sunrise} unix format="HH:mm"/>
            </Grid.Column>
            </Container>
        
      
    );
  }
}

export default DailySunrise;
