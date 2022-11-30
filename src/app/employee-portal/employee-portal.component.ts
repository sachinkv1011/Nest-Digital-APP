import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css']
})
export class EmployeePortalComponent {
  eid=""
  password=""

constructor(private route:Router){}

  readValue=()=>{
    if (this.eid=="1122" && this.password=="12345") {
      this.route.navigate(['/addcourse'])
      
    } else {
      alert("Invalid credentials")
      
    }
  }

}
