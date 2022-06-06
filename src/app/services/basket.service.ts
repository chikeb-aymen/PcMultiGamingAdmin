import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Basket } from '../models/basket';
import { PcBuilder } from '../models/pcBuilder';



@Injectable({
  providedIn: 'root'
})

export class BasketService {

  private apiServeUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  
  public getCartByUserId(userId?:number): Observable<Basket[]>{
    return this.http.get<Basket[]>(`${this.apiServeUrl}/api/v1/user/cart/${userId}`);
  }

  public deleteProduit(options:object){
    return this.http.delete(`${this.apiServeUrl}/api/v1/card`,options).subscribe((s)=>{
      console.log(s)
      location.reload()
    });
  }

  public getPcBuilderByUserId(userId?:number): Observable<PcBuilder[]>{
    return this.http.get<PcBuilder[]>(`${this.apiServeUrl}/api/v1/card/pcBuilder/${userId}`);
  }

  public deletePcBuilder(id?:number){
    return this.http.delete(`${this.apiServeUrl}/api/v1/card/pcBuilder/delete/${id}`).subscribe((s)=>{
      console.log(s)
      location.reload()
    });
  }

  

  


}
