import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MiUsuarioService {

  private static id: any;
  private static estado: boolean=false;

  constructor() { 
  }

  static obtenerUsuario(): String{
    return MiUsuarioService.id;
  }

  static estadoUsuario(): boolean{
    return MiUsuarioService.estado;
  }

  static ingresarUsuario(id:any): void{
    if(!MiUsuarioService.id){
      MiUsuarioService.estado=true;
      MiUsuarioService.id=id;
    }
  }

  static salir(): void{
    if(MiUsuarioService.id){
      MiUsuarioService.estado=false;
      MiUsuarioService.id=null;
    }
  }
}
