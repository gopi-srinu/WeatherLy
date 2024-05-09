import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToggle, IonInput } from '@ionic/angular/standalone';
import { NavbarComponent } from "../navbar/navbar.component";
import { WeatherService } from '../service/weather.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { single } from 'rxjs';
import { Model, ThreeDayForeCast } from '../model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, HttpClientModule]
})
export class DashboardPage implements OnInit {
  latitude: number = 0;
  longitude: number = 0;
  constructor(private service: WeatherService) {
    this.getLocationCoords();
    this.getThreeHourFiveDayForeCast();
  }
  currentWeatherData = signal<Model>({
    coord: {
      lon: 0,
      lat: 0
    },
    weather: [
      {
        id: 0,
        main: '',
        description: '',
        icon: '',
      }
    ],
    base: '',
    main: {
      temp: 0,
      feels_like: '',
      temp_min: '',
      temp_max: '',
      pressure: '',
      humidity: ''
    },
    visibility: '',
    wind: {
      speed: '',
      deg: ''
    },
    clouds: {
      all: ''
    },
    dt: '',
    sys: {
      type: '',
      id: '',
      country: '',
      sunrise: 0,
      sunset: 0
    },
    timezone: '',
    id: '',
    name: '',
    cod: ''
  });
  ngOnInit() { }
  getLocationCoords() {
    const locationCoords = navigator.geolocation.getCurrentPosition((currentPosition) => {
      this.latitude = currentPosition.coords.latitude;
      this.longitude = currentPosition.coords.longitude;
      console.log("latitude", this.latitude);
      console.log("longitude", this.longitude);
      this.service.getCurrentWeatherInformation(this.latitude, this.longitude).subscribe((currentWeatherData) => {
        this.currentWeatherData().coord.lat = currentWeatherData.coord.lat;
        this.currentWeatherData().coord.lon = currentWeatherData.coord.lon;
        this.currentWeatherData().weather[0].id = currentWeatherData.weather[0].id;
        this.currentWeatherData().weather[0].main = currentWeatherData.weather[0].main;
        this.currentWeatherData().weather[0].description = currentWeatherData.weather[0].description;
        this.currentWeatherData().weather[0].icon = currentWeatherData.weather[0].icon;
        this.currentWeatherData().base = currentWeatherData.base;
        this.currentWeatherData().main.temp = currentWeatherData.main.temp;
        this.currentWeatherData().main.feels_like = currentWeatherData.main.feels_like;
        this.currentWeatherData().main.temp_min = currentWeatherData.main.temp_min;
        this.currentWeatherData().main.temp_max = currentWeatherData.main.temp_max;
        this.currentWeatherData().main.pressure = currentWeatherData.main.pressure;
        this.currentWeatherData().main.humidity = currentWeatherData.main.humidity;
        this.currentWeatherData().visibility = currentWeatherData.visibility;
        this.currentWeatherData().wind.speed = currentWeatherData.wind.speed;
        this.currentWeatherData().wind.deg = currentWeatherData.wind.deg;
        this.currentWeatherData().clouds.all = currentWeatherData.clouds.all;
        this.currentWeatherData().dt = currentWeatherData.dt;
        this.currentWeatherData().sys.type = currentWeatherData.sys.type;
        this.currentWeatherData().sys.id = currentWeatherData.sys.id;
        this.currentWeatherData().sys.country = currentWeatherData.sys.country;
        this.currentWeatherData().sys.sunrise = currentWeatherData.sys.sunrise;
        this.currentWeatherData().sys.sunset = currentWeatherData.sys.sunset;
        this.currentWeatherData().timezone = currentWeatherData.timezone;
        this.currentWeatherData().id = currentWeatherData.id;
        this.currentWeatherData().name = currentWeatherData.name;
        this.currentWeatherData().cod = currentWeatherData.cod;
      })
    })
  }

  threeHourFiveDayForeCast = signal<ThreeDayForeCast[]>([])

  getThreeHourFiveDayForeCast() {
    const threeHourFivedayForeCast = this.service.getThreeHourandFiveDayForecast(this.latitude, this.longitude).subscribe((threeHourForeCast) => {
      this.threeHourFiveDayForeCast.set([threeHourForeCast]);
    })
  }

}
