import { Injectable } from '@angular/core';
import {environment} from'src/environment/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {

  private salApi:string=environment.salApi;
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.salApi);
  }

  add(body:any){
    return this.http.post(this.salApi,body);
  }

  update(id:any,body:any){
    return this.http.put(this.salApi+id,body);
  }

  getById(id:any){
    return this.http.get(this.salApi+id);
  }

  delete(id:any){
    return this.http.delete(this.salApi+id);
  }
}
