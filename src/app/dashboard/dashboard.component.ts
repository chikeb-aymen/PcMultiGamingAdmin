import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  products : Product[] | undefined;

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = "indeterminate";
  isLoading:boolean = true;

  constructor(private productService:ProductService,private router: Router) { }

  ngOnInit(): void {

    this.productService.getAllProduct(1).subscribe((result)=>{
      this.isLoading = false;
      this.products = result;
      console.log(result);
    })

  }

}
