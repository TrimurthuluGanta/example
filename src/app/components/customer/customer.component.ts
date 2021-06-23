import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 // public userId = sessionStorage.getItem("userId");
  constructor(private router2:Router) { }

  ngOnInit(): void {
    //console.log("customer id "+this.userId)
  }
  logout(): void {
    if (sessionStorage.getItem("role") !=null) {
      sessionStorage.removeItem("role");
      this.router2.navigate(['/login']);
    }
}
}
