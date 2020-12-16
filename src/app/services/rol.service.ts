import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {
private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
private urlRol:string = 'http://localhost:8080/roles';
  constructor(private http: HttpClient) { }
  getRoles():Observable<any>{
    return this.http.get(this.urlRol+'/all');
  }
}
