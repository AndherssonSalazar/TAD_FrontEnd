import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlProducto='http://localhost:3000/producto/'
  
  constructor(private http:HttpClient) { }

  obtenerProductos(nombre:String):Observable<any>{
    return this.http.get(this.urlProducto+'?nombre='+nombre);
  }

  filtroProducto(nombre:String):Observable<any>{
    return this.http.get(this.urlProducto+'filtro?nombre='+nombre);
  }

  crearProducto(producto:any):Observable<any>{
    return this.http.post(this.urlProducto+'crear', producto);
  }

}
