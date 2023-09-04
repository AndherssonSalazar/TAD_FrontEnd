import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { WebSocketService } from 'src/app/servicios/web-socket.service';

@Component({
  selector: 'app-mi-usuario',
  templateUrl: './mi-usuario.component.html',
  styleUrls: ['./mi-usuario.component.css']
})

export class MiUsuarioComponent implements OnInit {

  nombre:any;
  dni_ruc:any;
  tipo:any;

  constructor(private servicioUsuario:UsuarioService, private router: Router) { }

  ngOnInit(): void {

    this.servicioUsuario.obtenerUsuario(MiUsuarioService.obtenerUsuario()).subscribe(
      (data)=>{
        this.nombre=data.nombre;
        this.dni_ruc=data.dni_ruc;
        this.tipo=data.tipo;
        WebSocketService.nuevoProductoPatrocinado();
      },
      (err)=>{
        console.log(MiUsuarioService.obtenerUsuario())
        console.log(err);
      });
      
  }

  eliminar(): void{
    this.servicioUsuario.eliminarUsuario(MiUsuarioService.obtenerUsuario()).subscribe(
      (data)=>{
        console.log(MiUsuarioService.obtenerUsuario())
        this.salir();
      },
      (err)=>{
        console.log(MiUsuarioService.obtenerUsuario()+'4343')
        console.log(err);
      })
  }

  salir(): void{
    MiUsuarioService.salir();
    this.router.navigate(['']);
  }

  actualizar(): void{
    this.router.navigate(['actualizar_usuario']);
  }

  agregarProducto(): void{
    this.router.navigate(['crear_producto']);
  }

}
