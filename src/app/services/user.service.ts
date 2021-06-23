import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getAllUsers():Observable<User>{
    return this.http.get<User>("http://localhost:8081/RestUser/uservehicle/viewAllUsers");
  }
  addUser(us:User): Observable<User>{
    alert(JSON.stringify(us));
    return this.http.post<User>("http://localhost:8081/RestUser/uservehicle/adduser",us);//.catch(this.errorHandler);
  }

  deleteUser(usId:string):Observable<User>{
    alert("Deleting:"+usId);
    console.log(usId);
    return this.http.delete<User>(`http://localhost:8081/RestUser/uservehicle/delete/${usId}`);
  }
  validateUser(usId:string,psw:string):Observable<User>{
    alert("validating: "+usId+" "+psw);
    let x= this.http.get<User>(`http://localhost:8081/RestUser/uservehicle/uservalid/${usId}/${psw}`);
    alert(x);
    return x;
  }
  updateUser(us:User):Observable<User>{
    alert(JSON.stringify(us))
  let y= this.http.put<User>(`http://localhost:8081/RestUser/uservehicle/update/${us.userId}`,us);
  //alert(y);
  return y;
  }
  searchUserById(usId:string):Observable<User>{
    alert("Searching "+usId);
    return this.http.get<User>(`http://localhost:8081/RestUser/uservehicle/view/${usId}`);
  }
}
