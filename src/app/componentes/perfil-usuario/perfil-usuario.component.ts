import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { PatrocinioService } from 'src/app/servicios/patrocinio.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  
  dni_ruc: String = '';
  nombre:any;
  tipo:any;
  estado:boolean=MiUsuarioService.estadoUsuario();

  constructor(private route: ActivatedRoute, private servicioUsuario: UsuarioService, private servicioPatrocinio:PatrocinioService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dni_ruc = params['id']; 
      this.servicioUsuario.obtenerUsuario(this.dni_ruc).subscribe(
        (datos)=>{
          console.log(datos);
          this.nombre=datos.nombre;
          this.dni_ruc=datos.dni_ruc;
          this.tipo=datos.tipo;
        })
    });
  }

  patrocinar(): void{
    this.servicioPatrocinio.crearPatrocinio({"codigoPatrocinador":MiUsuarioService.obtenerUsuario(),"codigoPatrocinado":this.dni_ruc,"cantidadInvertida":100}).subscribe(
      (datos)=>{
        console.log(datos);
      },
      (error)=>{
        console.log(error);
      }
    );

  }

}
