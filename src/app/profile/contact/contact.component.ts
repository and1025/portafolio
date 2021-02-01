import { Component, OnInit } from '@angular/core';
/*import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';*/
//import swal from 'sweetalert';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};

  constructor(){}

  ngOnInit() {

  }

  send(){
    console.log("Este es el modelo:" , this.model);
    let list__errors = "";
    if(this.model.name == "" || this.model.name == null || this.model.name == undefined || this.model.name.length == 0) {
      //Swal.fire('Oops...', 'El campo nombre no puede ir en blanco', 'error');
      list__errors += "<li>El campo nombre es requerido. </li><br>";
    }if(this.model.subject == "" || this.model.subject == null || this.model.subject == undefined || this.model.subject.length == 0){
      //Swal.fire('Oops...', 'El campo subject no puede ir en blanco', 'error');
      list__errors += "<li>El campo subject es requerido. </li><br>";
    }if(this.model.email == "" || this.model.email == null || this.model.email == undefined || this.model.email.length == 0){
      //Swal.fire('Oops...', 'El campo email no puede ir en blanco', 'error');
      list__errors += "<li>El campo email es requerido. </li><br>";
    }if(this.model.message == "" || this.model.message == null || this.model.message == undefined || this.model.message.length == 0){
      //Swal.fire('Oops...', 'El campo message no puede ir en blanco', 'error');
      list__errors += "<li>El campo message es requerido. </li><br>";
    }

    if ( list__errors.length > 0 ) {
      Swal.fire('Oops...', 'Estimado usuario debe validar la siguiente información:' +'<ul>'+ '<br>' + list__errors + '</ul>', 'error');			 
		}else{
      //this.create();
      console.log("todo estuvo bien");
		}
  }
  // snotifyConfig = environment.snotifyConfig;
  // model: any = {};

  // constructor(
  //   private profile: ProfileService,
  //   private snotify: SnotifyService
  // ) { }

  // ngOnInit() {
  // }

  // contact() {
  //   this.profile.contactus(this.model).subscribe(data => {
  //     if (data.status) {
  //       this.snotify.success(data.message, 'Success', this.snotifyConfig);
  //     } else {
  //       this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
  //     }
  //   }, err => {
  //     this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
  //   });
  // }

}
