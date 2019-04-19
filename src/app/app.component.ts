import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { RootObject, List } from './weatherJSON';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Weather App';

  allDetails:Array<List>;

  city:string;
  
  currData:RootObject
  
  constructor(private data:WeatherService){
  }

  getWeather(){
    this.currData=null;
    this.data.getData(this.city).subscribe((d:RootObject)=>{
      
      this.get5DayData(d);
      console.log(d)
    },(error) => {
      alert("Please Enter a Valid City");
    });

    this.data.getCurrData(this.city).subscribe((d:RootObject)=>{
      console.log(d)
      this.currData = d;
    },(error) => {
      alert("Please Enter a Valid City");
    })
  
  }
  get5DayData(details:RootObject){
    this.allDetails = [];
    for (let index = 0; index < 5; index++) {
      this.allDetails.push(details.list[index*8]);
      
    }

  }
}
