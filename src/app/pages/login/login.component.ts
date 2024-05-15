import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../service/usuarios.service';
import { TokenResponse } from '../../interfaces/tokenresponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string;
  password: string;

 
  constructor(private router: Router, private usuariosService: UsuariosService) {}
  login() {
    console.log("Chamando função login", this.username, this.password);

    // Envia os dados para a API para autenticação
    this.usuariosService.login(this.username, this.password).subscribe(
      (token) => {
        // Se a autenticação for bem-sucedida, armazene o token e redirecione para a página home
    
        console.log("O valor do token é: " + token);
        localStorage.setItem('token', token);
        sessionStorage.setItem('usuario', this.username);
        this.router.navigate(['home']);
      },
      (error) => {
        console.error('Erro durante a autenticação:', error);
        // Tratar erros de autenticação aqui
      
      }
    );
  }


}



