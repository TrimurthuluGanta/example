export class User {
    userId:string;
    password:string;
    role:string;
    constructor(userId:string,password:string,role:string){
        this.userId=userId;
        this.password=password;
        this.role=role;
    }
    toString(){
        return "userId"+this.userId+ ", password"+this.password+", role"+this.role;
    }
  //just for testing in git
}
