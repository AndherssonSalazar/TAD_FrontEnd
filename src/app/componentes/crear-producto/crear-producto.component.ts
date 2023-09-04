import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiUsuarioService } from 'src/app/servicios/mi-usuario.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { WebSocketService } from 'src/app/servicios/web-socket.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {

  nombre:any;
  precio:any;
  categoria:Array<String>=['Tecnologia', 'Higiene', 'Artesania']
  medida:any;
  categoria_seleccionada:String='Tecnologia';

  constructor(private servicioProducto:ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  crear(): void {
    this.servicioProducto.crearProducto({"codigoVendedor":MiUsuarioService.obtenerUsuario(),"nombre":this.nombre,"categoria":this.categoria_seleccionada,"precio":this.precio,"medida":this.medida}).subscribe(
      (data)=>{
        WebSocketService.nuevoProducto({"codigoVendedor":MiUsuarioService.obtenerUsuario(),"nombre":this.nombre,"categoria":this.categoria_seleccionada,"precio":this.precio,"medida":this.medida});
        this.router.navigate(['mi_usuario']);
      },(err)=>{
        console.log(err)
      });
  }

}
