import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  urlUsuario='http://localhost:3000/usuario/';

  constructor(private http: HttpClient) { }

  ingresarUsuario(dni_ruc:String, clave:String):Observable<any>{
    return this.http.get(this.urlUsuario+'ingreso?dni_ruc='+dni_ruc+'&clave='+clave);
  }

  obtenerUsuario(dni_ruc:String):Observable<any>{
    return this.http.get(this.urlUsuario+'obtener?dni_ruc='+dni_ruc);
  }

  filtroUsuario(nombre:String):Observable<any>{
    return this.http.get(this.urlUsuario+'filtro?nombre='+nombre);
  }


  eliminarUsuario(dni_ruc:String):Observable<any>{
    return this.http.delete(this.urlUsuario+'eliminar?dni_ruc='+dni_ruc);
  }

  crearUsuario(usuario:any):Observable<any>{
    return this.http.post(this.urlUsuario+'crear',usuario);
  }

  actualizarUsuario(dni_ruc:String,usuario:any):Observable<any>{
    return this.http.put(this.urlUsuario+'actualizar?dni_ruc='+dni_ruc,usuario);
  }

}
