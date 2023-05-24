import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appoApi:string=environment.appoApi;
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.appoApi);
  }

  add(body:any){
    return this.http.post(this.appoApi,body)
  }

  update(){

  }

  getById(){

  }

  delete(){

  }
}
