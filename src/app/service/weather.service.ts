import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model, ThreeDayForeCast } from '../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private api_Key = '487982cd3e6cb89608a90058e36bb7e4';
  constructor(private http: HttpClient){} 
  getCurrentWeatherInformation(latitude: number, longitude: number): Observable<Model>{
    const currentWeatherInformation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.api_Key}&units=metric`;
    return this.http.get<Model>(currentWeatherInformation);
  }
  getThreeHourandFiveDayForecast(latitude: number , longitude: number): Observable<ThreeDayForeCast>{
    const threeHourFiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${this.api_Key}&units=metric`;
    return this.http.get<ThreeDayForeCast>(threeHourFiveDayForecast);
  }
}
