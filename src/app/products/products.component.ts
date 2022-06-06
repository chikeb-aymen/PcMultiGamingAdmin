import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] | undefined;
  page : number;
  nextPage : number;
  previousPage : number;


  //Loading
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = "indeterminate";
  isLoading:boolean = true;

  constructor(private productService:ProductService,private route:ActivatedRoute) { 
    this.page = 1;
    this.nextPage = 1;
    this.previousPage = 1;
  }

  removeProduct(id:number,name:string){
    if(confirm("Êtes-vous sûr de vouloir supprimer "+name)){
        this.productService.deleteProduct(id).subscribe((result)=>{
          console.log(result);
          location.reload();
        })
    }
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if( params['page']<=0){
        this.page = 1;
        this.nextPage = Number(this.page) + 1;
        this.previousPage = Number(this.page) - 1;
      }
      else{
        this.page = params['page'];
        this.nextPage = Number(this.page) + 1;
        this.previousPage = Number(this.page) - 1;
      }
    });

    this.productService.getAllProduct(this.page).subscribe((result)=>{
      this.isLoading = false;
      this.products = result;
      console.log(result);
    })

  }

}
