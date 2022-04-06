import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

 @Injectable({
  providedIn: 'root'
})
export class PservicesService {
  constructor(private fakeApi:HttpClient ) { }

  firstService(){
    return this.fakeApi.get("https://jsonplaceholder.typicode.com/todos")
  }
}
