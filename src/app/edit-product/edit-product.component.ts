import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId:number = 0;

  updateProductForm:FormGroup;

  name: string = '';
  description: string = '';
  price: string = '';
  total: number = 0;
  category_id: string = '';
  overview: string = '';

  constructor(private http:HttpClient,private fb: FormBuilder,private route:ActivatedRoute,private productService:ProductService) {
    

    this.updateProductForm = this.fb.group({
      name: null,
      description: null,
      price: null,
      total: null,
      category_id: null,
      overview: null,
    });
  }



  submit(){

    const formData:any = new FormData(); 
    
    
    formData.append("name",this.updateProductForm.get('name')?.value==null ? this.name : this.updateProductForm.get('name')?.value);
    formData.append("description",this.updateProductForm.get('description')?.value==null ? this.description : this.updateProductForm.get('description')?.value);
    formData.append("price",this.updateProductForm.get('price')?.value==null ? this.price : this.updateProductForm.get('price')?.value);

    
    formData.append("total",this.updateProductForm.get('total')?.value==null ? this.total : this.updateProductForm.get('total')?.value);
    formData.append("category_id",this.updateProductForm.get('category_id')?.value==null ? this.category_id : this.updateProductForm.get('category_id')?.value);
    formData.append("overview",this.updateProductForm.get('overview')?.value==null ? this.overview : this.updateProductForm.get('overview')?.value);


    this.productService.updateProduct(this.productId,formData).subscribe((result)=>{
      console.log(result);
    })
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    
    this.productService.getProductDetails(this.productId).subscribe(result => {
      this.name = result.name;
      this.description = result.description;
      this.price = result.price;
      this.total = result.total;
      this.category_id = result.category;
      this.overview = result.overview;
    })


  }

}
