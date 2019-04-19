import { Component, OnInit, Input } from '@angular/core';
import { List } from '../weatherJSON';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
@Input() allDetails: List;
day:string;
minTemp:number;
maxTemp:number;
currDate : number = new Date().getDate();
pollen:string;

baseUrl:string = 'http://api.openweathermap.org/img/w/';
iconUrl:string;
 weekday: Array<string> = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  currweather:string='default'
  constructor() {
    // console.log(this.allDetails)
    // console.log('========================================================================')
    // this.day = this.allDetails.dt_txt;
    // this.minTemp = this.allDetails.main.temp_min;
    // this.maxTemp = this.allDetails.main.temp_max;
    // this.iconUrl = this.baseUrl + this.allDetails.weather[0].icon + '.png';
    // this.pollen = this.allDetails.weather[0].main



   }

  ngOnInit() {
    if(new Date(this.allDetails.dt_txt).getDate() === this.currDate){
      this.day = "Today";
    }
    else{
      this.day = this.weekday[new Date(this.allDetails.dt_txt).getUTCDay()];
    }
    if(this.allDetails.weather[0].main==='Clear'){
      this.currweather='sunny'
    }
    if(this.allDetails.weather[0].main==='Rain'){
      this.currweather='rainy'
    }
    if(this.allDetails.weather[0].main==='Clouds'){
      this.currweather='cloudy'
    }
    this.minTemp = this.allDetails.main.temp_min;
    this.maxTemp = this.allDetails.main.temp_max;
    this.iconUrl = this.baseUrl + this.allDetails.weather[0].icon + '.png';
    this.pollen = this.allDetails.weather[0].main
  }

}
