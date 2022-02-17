import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin : boolean | undefined

  loginForm = new FormGroup({
    UserName : new FormControl(null, [Validators.required]),
    Password: new FormControl(null, [Validators.required])
  });

  constructor(private http: HttpClient, private router: Router, 
    private productService: ProductService,) { }

  onSubmit() {
    if(this.loginForm.valid){

      var loginData = {
        UserName : this.loginForm.value.UserName, 
        Password : this.loginForm.value.Password
      }

      this.productService.login(loginData).subscribe(response =>{

        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;        
        this.router.navigate(["product"]);
        
      }, err =>{
        this.invalidLogin = true;
      } );
    }    
    
  }

  
  
  
  ngOnInit(): void {
  }

}
