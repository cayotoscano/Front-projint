import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  email = "";
  senha = "";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  registrar() {
    this.http.post("http://localhost:3000/api/usuarios", {
      email: this.email,
      senha: this.senha
    }).subscribe({
      next: () => {
        alert("Conta criada com sucesso!");
        this.router.navigate(["/login"]);
      },
      error: (err) => {
        if (err.status === 409) {
          alert("Esse email já está cadastrado.");
        } else {
          alert("Erro ao registrar.");
        }
      }
    });
  }

  
  
}
