import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  username: string = '';
  password: string = '';
  
    

  constructor(private http:HttpClient,private fb: FormBuilder,private productService:ProductService,private router:Router) { 
    this.loginForm = this.fb.group({
      username: '',
      password: '',
    });
  }
  ngOnInit(): void {

  }

  login(){
    console.log("yes")
    
    this.username = this.loginForm.get('username')?.value;
    this.password = this.loginForm.get('password')?.value;
    
    console.log(this.username)

    if((this.username=="oussama" || this.username =="oussama@pcmultigaming.com") && this.password=="oussamaadmin"){
      localStorage.setItem("password","oussamaadmin");
        this.router.navigate(['']);
    }
  }

}
