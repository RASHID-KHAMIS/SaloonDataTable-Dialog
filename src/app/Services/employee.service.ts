import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl:string=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl);
  }

  add(body:any){
    return this.http.post(this.apiUrl,body);
  }

  update(id:any,body:any){
    return this.http.put(this.apiUrl+id,body);
  }

  getById(id:any){
    const url= `${this.apiUrl}${id}`;
    return this.http.get(url);
  }
  delete(id:any){
    return this.http.delete(this.apiUrl+id);
  }
}
