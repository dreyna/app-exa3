import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario;
  constructor(private autService:AuthService, private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    
  }
  login(){
    if(this.usuario.username=='' || this.usuario.password==''){
        swal.fire('Error Login','Username o Password vacías','error');
        return;
    }else{
      this.autService.autentificar(this.usuario).subscribe(response =>{
        console.log(response);
        swal.fire('Login', `Hola ${this.usuario.username}, has iniciado sesión con éxito`, 'success');
      },err =>{
        if(err.status==400){
          swal.fire('Errorasasa Login','Username o Password vacías','error');
        }
      })
    }
  }
}
