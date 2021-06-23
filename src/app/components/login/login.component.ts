import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  users:User[]|any;   //public user = [] as any;
  submitted: boolean=false;
  loading=false;
  loginForm: FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserService,private router:Router ) {
    this.users=new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    this.userForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      role: ['']//,Validators.required]
    });
  }
  adminimg="../assets/images/OIP.jpg"
onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.userForm.invalid) {
      return; 
  }
  alert("entered in onsubmit")
 // this.loading = true;
  this.userservice.validateUser(this.userForm.controls.userId.value, this.userForm.controls.password.value)
      .subscribe(
          data => {
            alert("valid function works")
            alert("data: "+data.role)
         //  
            sessionStorage.setItem("role",data.role);
            sessionStorage.setItem("userId",data.userId);
            alert("after sessionSet")
            if(data.role=="admin"){
            this.router.navigate(['admin']);
            }
            else{
            this.router.navigate(['customer']);
            }
          },
          error => {
             // this.alertService.error(error);
             alert("Invalid details") 
             this.loading = false;
          });
         // }
}
}

