import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  roles:any;
  constructor(private rolService:RolService) { }

  ngOnInit(): void {

  }
  listar():void{
    this.rolService.getRoles().subscribe(
      (data) =>{
        this.roles = data['cursor_roles'];
        console.log(this.roles);
      }, (error) => {
        console.log("Error al traer datos...!")
      }
    )
  }
}
