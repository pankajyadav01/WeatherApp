import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curr-day',
  templateUrl: './curr-day.component.html',
  styleUrls: ['./curr-day.component.css']
})
export class CurrDayComponent implements OnInit {
@Input() inputObject;
result:object;

  currLoc:string;

  weatherDesc:string;

  pressuse:number;

  humidity:number;

  wind:string;

  currdate:string;

  currTemp:number;

  baseUrl:string = 'http://api.openweathermap.org/img/w/';
  iconUrl:string;
  currweather:string='default'
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.inputObject)
    if(this.inputObject.weather[0].main==='Clear'){
      this.currweather='sunny'
    }
    if(this.inputObject.weather[0].main==='Rain'){
      this.currweather='rainy'
    }
    if(this.inputObject.weather[0].main==='Clouds'){
      this.currweather='cloudy'
    }
    this.iconUrl = this.baseUrl + this.inputObject.weather[0].icon + '.png';
    this.currLoc = this.inputObject.name + ',' + this.inputObject.sys.country;
    this.weatherDesc = this.inputObject.weather[0].description;
    this.pressuse = this.inputObject.main.pressure;
    this.humidity = this.inputObject.main.humidity;
    this.wind = this.inputObject.wind.speed + ' mph ' + this.inputObject.wind.deg;
    this.currdate = new Date().toDateString();
    this.currTemp = this.inputObject.main.temp
    
  }

}
