import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[]|any;
  userSearchForm: any;
  user: User;
  constructor(private fb:FormBuilder,private router1:Router,private userservice:UserService) {
    this.users=new Array();
   }

  ngOnInit(): void {
    this.userSearchForm=this.fb.group({
      searchId:['',Validators.required],
    });
  }
  logout(): void {
    if (sessionStorage.getItem("role") !=null) {
      sessionStorage.removeItem("role");
      this.router1.navigate(['/login']);
    }
}
getUserDetails(){
  this.userservice.getAllUsers().subscribe(data=>{
    alert("Data: ");
       this.users = data;
     });

}
getUserById(){
  alert("getUSer Function enters")
  this.userservice.searchUserById(this.userSearchForm.controls.searchId.value).subscribe(data=>{
    alert("returns output")
    alert(JSON.stringify(data.userId));
    this.user=data;
  });
  
}
}
