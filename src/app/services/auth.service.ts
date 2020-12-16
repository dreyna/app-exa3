import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _usuario!:Usuario;
  private _token!: string;
  constructor(private http: HttpClient) { }
  public get usuario(): Usuario{
    if(this._usuario!=null){
      return this._usuario;
    }else if(this._usuario==null && sessionStorage.getItem('usuario')!=null){
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')!) as Usuario;
      return this._usuario;
    }
    return new Usuario();
}
  autentificar(usuario: Usuario): Observable<any> {    
    const urlsec = 'http://localhost:9191/oauth/token';
    const credenciales = btoa('angularapp' + ':' + '1234567');
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales});
    let params = new URLSearchParams();
      params.set('grant_type','password');
      params.set('username',usuario.username);
      params.set('password',usuario.password);
      console.log(usuario.username+'/'+usuario.password);
    return this.http.post(urlsec, params.toString(), {headers: httpHeaders});
  }
}
