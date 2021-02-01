import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import  *  as  jsonES  from  '../../../assets/json/ES.json';
import * as jsonEN from  '../../../assets/json/EN.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
