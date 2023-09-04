import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { WebSocketService } from 'src/app/servicios/web-socket.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  clave:any;
  dni_ruc:any;

  constructor(private servicioUsuario: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    
    //this.servicioWebSocket.getNewMessage()?.subscribe((data)=>{console.log(data)})
  }

  ingresar():void{
    this.servicioUsuario.ingresarUsuario(this.dni_ruc,this.clave).subscribe(
      (data)=>{
        WebSocketService.sendMessage(this.dni_ruc);
        MiUsuarioService.ingresarUsuario(this.dni_ruc);
        this.router.navigate(['mi_usuario']);
      },(err)=>{
        console.log(err);
      });
  }  

}
