import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { catchError, throwError } from 'rxjs';

 @Injectable({
  providedIn: 'root'
})
export class PservicesService {
  constructor(private fakeApi:HttpClient ) { }

  firstService(){
    return this.fakeApi.get("https://jsonplaceholder.typicode.com/todjos").pipe(
      catchError(this.handleError)
    )
  }

  handleError(error:any){
       return throwError(()=> new Error (error.message || "Server is off"))
  }
}
