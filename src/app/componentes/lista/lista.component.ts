import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],

})
export class ListaComponent implements OnInit {

  @Input() lista: any;
  @Input() titulo: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verPerfil(dni_ruc:String):void{
    if(MiUsuarioService.obtenerUsuario()!=dni_ruc)
      this.router.navigate(['perfil_usuario/'+dni_ruc]);
    else
      this.router.navigate(['mi_usuario']);
  }
}
