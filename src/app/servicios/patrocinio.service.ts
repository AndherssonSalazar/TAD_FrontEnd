import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatrocinioService {

  urlPatrocinio='http://localhost:3000/patrocinio/';

  constructor(private http: HttpClient) { }

  crearPatrocinio(patrocinio:any):Observable<any>{
    return this.http.post(this.urlPatrocinio+'crear',patrocinio);
  }

}
