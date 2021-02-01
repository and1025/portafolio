import { Component, OnInit } from '@angular/core';
//import { Http,  Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import  *  as  jsonES  from  '../../../assets/json/ES.json';
import * as jsonEN from  '../../../assets/json/EN.json';
import{ AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private appComponent:AppComponent,
  ) { }

  myJson :any;
  ngOnInit() {    
    this.changeLang();
  }

  changeLang(){
    //var ln  = window.navigator.language;    
    var ln = localStorage.getItem("language")
    if(ln.split("-")[0] == "es" || ln.split("-")[0] == "Es"){
      this.myJson = jsonES["default"];
    }else{
       this.myJson = jsonEN["default"];
    }        
  }

  setLanguague(idioma){
    this.appComponent.setLanguage(idioma);
    if(idioma == "es" || idioma == "Es"){
      this.myJson = jsonES["default"];
    }else{
       this.myJson = jsonEN["default"];
    }
  }

}
