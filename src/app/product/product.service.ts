import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductComponent } from './product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  jsonData:any=(JSON as any).default;

  constructor(private httpClient: HttpClient) { }

  translateLanguage(val: any, data: any){
    console.log(val.code);
    const API = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to="+val.code;
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': 'f37cb1ebbc964a86b14e90199ef13bea',
      'Ocp-Apim-Subscription-Region': 'eastasia',
      'Content-Type': 'application/json'
    });

    return this.httpClient.post(API, [{'text': data}], {headers : headers});
  }

  getAllProducts( ): Observable<any> {
    // console.log(this.httpClient.get("https://localhost:44383/GetAllProducts"));
    return this.httpClient.get("https://localhost:44353/GetAllProducts");
  }

  deleteProduct(id: number) {
    //console.log(id);    
    return this.httpClient.delete<any>("https://localhost:44353/DeleteProduct/" + id);
  }

  addProduct(data: any){
    //console.log(data)
    return this.httpClient.post<any>("https://localhost:44353/AddProduct", data);
    
  }

  login(data:any){
    //console.log(data);
    return this.httpClient.post("https://localhost:44353/api/auth/login", data);
  }

  updateProduct(data:any){
    //console.log(data)
    return this.httpClient.put<any>("https://localhost:44353/UpdateProduct", data);
  }
}
