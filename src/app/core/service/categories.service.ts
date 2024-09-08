import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
//   private readonly _HttpClient=inject(HttpClient);
  
// getAllCategories():Observable<any>{
// return this._HttpClient.get(`${environment.baseURL}/api/v1/categories`)
// }
  constructor(private _HttpClient:HttpClient) { }


  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/api/v1/categories`)
  }
  getSpecificCategory(id:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseURL}/api/v1/categories/${id}`)
  }
}
