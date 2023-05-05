import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/users.services';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  currentUser: any;
  currentUserEmail: any;
  //Form for registration
  registrationForm: FormGroup = new FormGroup({
    //Required inputs
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  //Form for Login
  loginForm: FormGroup = new FormGroup({
    //Required inputs
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginForm.valid) {  
      this.userService.login(this.loginForm.value).subscribe(
        response => {
          console.log(response.userDetails);
          //store user info
          this.currentUser = response.userDetails.name;
          this.currentUserEmail = response.userDetails.email;
          //Methods from user service
          this.userService.setCurrentUser(this.currentUser);
          this.userService.setCurrentUserEmail(this.currentUserEmail);
          console.log(this.currentUser + " ")
          alert(" " + response.message);
        },
        error => {
          console.log(error);
          alert(" " + error.error.message);
          //alert(" No Dice");
        }
      );
    }
  }

  onSubmit() {
    // //Form input
    // if (this.registrationForm.valid) {
    //   console.log('User registration data:', this.registrationForm);
    //   alert("Name: " + this.registrationForm.value.name);
    // } else {
    //   alert("Details: " + this.registrationForm);
    //   alert(" No Dice");
    // }

    //Send form input through user.services to our server
    if (this.registrationForm.valid) {
      this.userService.register(this.registrationForm.value).subscribe(
        response => {
          console.log(response); 
          alert("Details: " + this.registrationForm.value.email);
        },
        error => {
          console.log(error);
          alert("Error: " + this.registrationForm.value.email + " " + error.error.message);
        }
      );
    }
    
  }
}
