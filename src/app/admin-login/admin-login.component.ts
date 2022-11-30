import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private route: Router) {
  }
  
  readValue = () => {
    
    if (this.username == "admin" && this.password == "nestdigital") {
      this.route.navigate(['/home'])
    } else {
      alert("invalid login")
    }
  }
  data: any = {}




}
