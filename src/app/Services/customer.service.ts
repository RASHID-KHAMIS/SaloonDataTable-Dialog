import { Injectable, OnInit } from '@angular/core';
import {environment} from 'src/environment/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private CustApi:string=environment.CustApi;
  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get(this.CustApi);
  }

  add(body:any){
    return this.http.post(this.CustApi,body);
  }

  update(id:any,body:any){
    return this.http.put(this.CustApi+id,body)
  }
  
  getById(id:any){
    // const cUrl= `${this.CustApi}${id}`;
   return this.http.get(this.CustApi+id);
  }

  delete(id:any){
    return this.http.delete(this.CustApi+id);
  }


}
