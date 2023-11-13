import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-foodShop';
  url = 'http://localhost:80/Foodshop/food';

  constructor(private http : HttpClient){
    // let url = 'http://localhost:80/Foodshop/food';
    // let obs = this.http.get(url).subscribe(data =>{
    //   console.log(data);
    //   console.log('Complete');
    // });
    // console.log('Continue');
    // setTimeout(()=>{
    //   obs.unsubscribe();
    //   console.log('ERROR');
    // }, 500);
  }


}
