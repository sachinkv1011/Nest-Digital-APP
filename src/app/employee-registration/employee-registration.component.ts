import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent {
  empid=""
  firstname=""
  lastname=""
  houseno=""
  housename=""
  street=""
  pincode=""
  district=""
  state=""
  country=""
  mobileno=""
  email=""
  parentname=""
  gender=""
  degree=""
  experience=""
  doj=""
  username=""
  password=""
  cpassword=""

  data:any={}

  readValue=()=>{
    this.data={
      "empid":this.empid,
      "firstname":this.firstname,
      "lastname":this.lastname,
      "houseno":this.houseno,
      "housename":this.housename,
      "street":this.street,
      "pincode":this.pincode,
      "district":this.district,
      "state":this.state,
      "country":this.country,
      "mobileno":this.mobileno,
      "email":this.email,
      "parentname":this.parentname,
      "gender":this.gender,
      "degree":this.degree,
      "experience":this.experience,
      "doj":this.doj,
      "username":this.username,
      "password":this.password,
      "cpassword":this.cpassword
    }
    if (this.data.password==this.data.cpassword) {
      console.log(this.data)
      alert("Registered Successfully")
      
    } else {
      alert("Password and confirm password mismatches")
      
    }
     
  }

}
