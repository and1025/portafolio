import { Component } from '@angular/core';
import  *  as  jsonES  from  '../assets/json/ES.json';
import * as jsonEN from  '../assets/json/EN.json';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(){

  }

  myJson = [];
  ngOnInit(){
    var ln  = window.navigator.language;    
    localStorage.setItem("language", ln.split("-")[0]);
    if(ln.split("-")[0] == "es" || ln.split("-")[0] == "Es"){
      this.myJson = jsonES["default"];
    }else{
       this.myJson = jsonEN["default"];
    }        
  }

  setLanguage(idioma){
    localStorage.removeItem("language");
    localStorage.setItem("language", idioma);
    /*Llamo al evento para los demás componentes*/
    var event = new Event("idioma");
    document.dispatchEvent(event);
    /*--------------------------------------*/
  }

}
