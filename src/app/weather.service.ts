import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from './weatherJSON';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getData(city:string){

    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?units=metric&q='+city+'&mode=json&APPID=179e47ad116a46b9cef0d1b8230b0f7d', {responseType: 'json'})
    
  }
  getCurrData(city:string){

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?units=metric&q='+city+'&mode=json&APPID=179e47ad116a46b9cef0d1b8230b0f7d', {responseType: 'json'})
    
  }
}
