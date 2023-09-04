import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  nombre: String= '';
  datos: any;
  tipo_seleccionado: String= 'Usuarios';
  tipo: Array<String> = ['Usuarios', 'Productos'];

  constructor(private servicioProducto: ProductoService, private servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
  }

  busqueda(nombre:String):void{

    switch(this.tipo_seleccionado){
      case 'Usuarios':{
        this.servicioUsuario.filtroUsuario(nombre).subscribe(
          (datos)=>{
            console.log(datos);
            this.datos=datos
          }
        )
        break;
      }
      case 'Productos':{
        this.servicioProducto.filtroProducto(nombre).subscribe(
          (datos)=>{
            console.log(datos);
            this.datos=datos
          }
        )
        break;
      }
    };
    console.log(this.nombre);
  }
}
