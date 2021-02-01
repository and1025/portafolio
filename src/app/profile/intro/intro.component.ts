import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import  *  as  jsonES  from  '../../../assets/json/ES.json';
import * as jsonEN from  '../../../assets/json/EN.json';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(
    private cf: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.changeLang()
    document.addEventListener("idioma" , (e) =>{
      this.changeLang();
    })
  }

  myJson:any;
  changeLang(){     
    var ln = localStorage.getItem("language");
    console.log("ln:" , ln);    
    if(ln == "es" || ln == "Es"){
      this.myJson = jsonES["default"];      
    }else{
       this.myJson = jsonEN["default"];       
    }        
    this.cf.detectChanges();
    console.log("Este es el json:" , this.myJson);    
  }

}
