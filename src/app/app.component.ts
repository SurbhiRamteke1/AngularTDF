import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';
//import {EnrollmentService} from  './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms-proj';

  constructor(private _enroll :EnrollmentService)
  {

  }
  topics = ["Angular" ,"Vue","React" ];
topicHasError= false;
submitted =false;
errorMsg="";
  userModel = new User("Tom","tom@gmail",1234567890,"default","Morning",true);
  ValidateTopic(value)
  {
    if(value==='default')
    {
      this.topicHasError=true;
    }
    else
    {
      this.topicHasError=false;
    }
  }

  OnSubmit() 
  {
    this.submitted=true;
    this._enroll.enroll(this.userModel)
    .subscribe(
      data => console.log("Success" , data),
      error =>  this.errorMsg=error.statusText)
    
    //console.log(this.userModel)
  }
}
