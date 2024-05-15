import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { TokenResponse } from '../interfaces/tokenresponse';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  baseUrl: string = 'https://teste2-j43u.onrender.com/usuario'; 
  baseUrlToken: string ='https://teste2-j43u.onrender.com';  // Adicione 'http://' para indicar que é um protocolo HTTP
  userName: string | null;


  
  constructor(private http: HttpClient) {
    this.userName = sessionStorage.getItem('usuario');
   }



  getAllUsuarios(): Observable<Usuario[]> {
    // Recupere o token de autenticação do localStorage
    const token = localStorage.getItem('token');
  
    // Verifique se o token foi encontrado
    if (!token) {
      // Se não houver token, lance um erro
      return throwError('Token de autenticação não encontrado.');
    }


 
  
    // Configurar os cabeçalhos HTTP com o token de autenticação
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
   

    
  
    // Faça a chamada HTTP para buscar os usuários, passando os cabeçalhos
    return this.http.get<Usuario[]>(this.baseUrl, { headers });
  }



  // método que puxa um usuário específico
  getUsuarioById(id: number): Observable<Usuario> {

    const token = localStorage.getItem('token');
  
    // Verifique se o token foi encontrado
    if (!token) {
      // Se não houver token, lance um erro
      return throwError('Token de autenticação não encontrado.');
    }


 
  
    // Configurar os cabeçalhos HTTP com o token de autenticação
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url,{ headers });

    
  }

  deletarUsuario(id: number): Observable<Usuario> {

    const token = localStorage.getItem('token');
  
    // Verifique se o token foi encontrado
    if (!token) {
      // Se não houver token, lance um erro
      return throwError('Token de autenticação não encontrado.');
    }


 
  
    // Configurar os cabeçalhos HTTP com o token de autenticação
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  



    const url = `${this.baseUrl}/${id}`;


    return this.http.delete<Usuario>(url,{headers});
  }



 // Método para atualizar um usuário
 atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
  const token = localStorage.getItem('token');
  
  // Verifique se o token foi encontrado
  if (!token) {
    // Se não houver token, lance um erro
    return throwError('Token de autenticação não encontrado.');
  }




  // Configurar os cabeçalhos HTTP com o token de autenticação
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  const url = `${this.baseUrl}/${id}`;


  return this.http.put<Usuario>(url, usuario,{headers});
}
 


  login(username: string, password: string): Observable<string> {

console.log("o valor do username é: "+username, "o valor da senha é: "+password);



    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

      return this.http.post<TokenResponse>(`${this.baseUrlToken}/token`, body.toString(), { headers }).pipe(
        map(response => response.token)
      );


  }




}
