import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm:FormGroup;
  users:User[]|any;   //public user = [] as any;
  isUpdate: boolean=false;
  user: User;
  userSearchForm: FormGroup;
  constructor(private fb:FormBuilder,private userservice:UserService ) {
    this.users=new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    this.userForm = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
    this.userSearchForm=this.fb.group({
      searchId:['',Validators.required],
    });
  }
 addUser():void{
  let us: User= new User(this.userForm.controls.userId.value,
    this.userForm.controls.password.value,
    this.userForm.controls.role.value);
 this.userservice.addUser(us).subscribe(data=>{
  alert("data: "+JSON.stringify(data));
   this.users.push(us);
 });
}

getUserDetails(){
  this.userservice.getAllUsers().subscribe(data=>{
    alert("Data: ");
       this.users = data;
     });

}
deleteUser(userId:string){
  let candelete=confirm(`Are you sure you want to delete user '${userId}'`)
  if(candelete==true){
    this.userservice.deleteUser(userId).subscribe(data=>{
      alert("Deleted");
      //this.users.delete(userId);
      this.users.pop();
    });
  }
}
/**
getUserById(userId:string){
  this.userservice.searchUserById(userId).subscribe(data=>{
    this.users=data;
  });
}

 */
 getUserById(){
  alert("getUSer Function enters")
  this.userservice.searchUserById(this.userSearchForm.controls.searchId.value).subscribe(data=>{
    alert("returns output")
    alert(JSON.stringify(data.userId));
    this.user=data;
  });
  
}


  updateUser(userId:string){
    alert("Into update function")
let us=this.users.find(u=>u.userId==userId)
alert("after finding " +userId)
this.userForm=this.fb.group({
  userId:[us.userId,Validators.required],
  password:[us.password,Validators.required],
  role:[us.role,Validators.required],
});
alert("after assaigning validators");
this.isUpdate=true;
  }

saveUser():void{
    let us:User=this.userForm.value;
    //logic for saving the employee
    if(!this.isUpdate){
      this.userservice.addUser(us)
      .subscribe(data => {
      //  this.users=data;
        alert("User with Id " + data.userId + " is created");
        this.userservice.getAllUsers().subscribe(uss => {
          this.user = us;
        });
      });
    }

    //updating the employee
    else{
      alert("entered to update")
      this.userservice.updateUser(us).subscribe(data => {
        alert("User is Updated");
      //  this.users=data;
        this.userservice.getAllUsers().subscribe(uss => {
          this.users = uss;
             });      
      });
      this.isUpdate=false;
    }
    this.userForm.reset();
    
  } 

}