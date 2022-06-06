import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { FormBuilder } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServeUrl = environment.apiBaseUrl;

  
  
  constructor(private http: HttpClient) {}



  public addProduct(formData:FormData): Observable<any>{
    return this.http.post(`${this.apiServeUrl}/api/v1/products/add`,formData);
  }

  public deleteProduct(id:number): Observable<any>{
    return this.http.post(`${this.apiServeUrl}/api/v1/products/delete/${id}`,[]);
  }


  
  public getAllProduct(page:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/page/${page}`);
  }

  public getProductByCategoryAndSize(category:string,size:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/category/${category}/size/${size}`);
  }


  public getProductsSimilarCategoryAndSize(size:number,category?:string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/similar/${category}/size/${size}`);
  }

  public getProductByCategoryAndPage(category:string,page:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/category/${category}/${page}`);
  }

  public getProductByParentCategoryAndSize(category:string,size:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/parent_category/${category}/size/${size}`);
  }


  
  public getProductByParentCategoryAndPage(parentCategory:string,page:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/parent_category/${parentCategory}/page/${page}`);

     
  }



  public getProductDetails(productId:number): Observable<Product>{
    return this.http.get<Product>(`${this.apiServeUrl}/api/v1/products/${productId}`);
  }

  public searchProducts(page?:number,productName?:string,filter?:string): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServeUrl}/api/v1/products/search/${productName}/${page}/filter=${filter}`);
  }

  public getCountSearchProducts(productName?:string):Observable<number>{
    return this.http.get<number>(`${this.apiServeUrl}/api/v1/products/search/${productName}/count`);
  }
  //count category
  public getCountCategoryProducts(categoryName?:string):Observable<number>{
    return this.http.get<number>(`${this.apiServeUrl}/api/v1/products/category/${categoryName}/count`);
  }
  //count parent category
  public getCountParentCategoryProducts(parentCategoryName?:string):Observable<number>{
    return this.http.get<number>(`${this.apiServeUrl}/api/v1/products/parent_category/${parentCategoryName}/count`);
  }

  public addPcBuilder():Observable<any>{
    return this.http.get<any>("https://multigamingecom.herokuapp.com/api/v1/products/pcBuilder/add");
  }


}
