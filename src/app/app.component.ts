import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   buildForm:any;
constructor() {
}
ngOnInit(): void {
  this.buildForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      email: new FormControl('' , [Validators.required, Validators.email]),
      password: new FormControl('' , [Validators.required , Validators.minLength(8)]),
      phone : new FormControl('' , [Validators.required , Validators.pattern(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/)]),
    }   
  )
}

getForm() {
  console.log(this.buildForm.value)
  this.buildForm.reset()
}





}
