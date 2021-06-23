import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router1:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    if (sessionStorage.getItem("role") !=null) {
      sessionStorage.removeItem("role");
      this.router1.navigate(['/login']);
    }
}
}
