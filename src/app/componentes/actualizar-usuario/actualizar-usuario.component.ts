import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  mostrar:boolean=false;
  nombre:any;
  dni_ruc:any;
  tipo:Array<String>=['Empresa','Persona Natural'];
  tipo_seleccionado:String='';

  constructor(private servicioUsuario:UsuarioService, private router: Router ) { }

  ngOnInit(): void { 
    this.servicioUsuario.obtenerUsuario(MiUsuarioService.obtenerUsuario()).subscribe(
      (data)=>{
        this.nombre=data.nombre;
        this.dni_ruc=data.dni_ruc;
        this.tipo_seleccionado=data.tipo;
        console.log(this.tipo_seleccionado);
        console.log(data);
        console.log(this.dni_ruc);this.mostrar=true;}, 
      (err)=>{
        console.log(err)
      });
     
  }

  actualizar(): void {
   
    this.servicioUsuario.actualizarUsuario(MiUsuarioService.obtenerUsuario(),{"nombre":this.nombre,"tipo":this.tipo_seleccionado}).subscribe(
      (data)=>{
        console.log(data);
        console.log(this.dni_ruc);
        this.router.navigate(['mi_usuario']);
      },(err)=>{console.log(err)});
  }

}
