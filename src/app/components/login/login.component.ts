import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule, NgModel, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [BrowserModule,
    FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = "";
  senha = "";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login() {
    this.http.post("http://localhost:3000/api/login", {
      email: this.email,
      senha: this.senha
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigate(["/home"]);
      },
      error: (err) => {
        alert("Email ou senha incorretos.");
      }
    });
  }





}