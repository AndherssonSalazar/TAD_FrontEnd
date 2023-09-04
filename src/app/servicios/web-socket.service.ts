import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io}  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private static socket=io('http://localhost:3000');
  private static message:any;
  
  constructor() {
    
  }

  public static sendMessage(message: any) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', message);
  }

  public static getNewMessage():Observable<any>{
    this.socket.on('sendMessage', (message) =>{
      this.message=message;
      console.log(message);
    });
    return this.message;
  };

  public static obtenerNovedades():Observable<any>{
    this.socket.on('novedades', (message) =>{
      this.message=message;
      console.log(message);
    });
    return this.message;
  };

  public static nuevoProducto(nuevoProducto:any): void{
    this.socket.emit('nuevo_producto', nuevoProducto);
  };

  public static nuevoProductoPatrocinado():void{
    this.socket.on('nuevo_producto_patrocinado', (message) =>{
      console.log(message);
    });
  };

}
