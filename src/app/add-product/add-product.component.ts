import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  userFile: Array<File> = [];
  userForm:FormGroup;

  name: string = '';
  description: string = '';
  price: string = '';
  total: number = 0;
  category_id: number = 0;
  overview: string = '';
    

  constructor(private http:HttpClient,private fb: FormBuilder,private productService:ProductService) { 
    this.userForm = this.fb.group({
      name: '',
      description: '',
      price: 0,
      total: 0,
      category_id: '',
      overview: '',
    });
  }

  
  onFileChange(event:any) {
   
    const files = event.target.files;
    for (let index = 0; index < files.length; index++) {
      this.userFile.push(files[index])
    }

    //this.userFile = files;

    console.log(this.userFile)
    

  }



  submit(){

    const formData:any = new FormData(); 
    
    
    formData.append("name",this.userForm.get('name')?.value);
    formData.append("description",this.userForm.get('description')?.value);
    formData.append("price",this.userForm.get('price')?.value);

    for (let index = 0; index < this.userFile.length; index++) {
      formData.append("image",this.userFile[index]);
    }
    
    formData.append("total",this.userForm.get('total')?.value);
    formData.append("category_id",this.userForm.get('category_id')?.value);
    formData.append("overview",this.userForm.get('overview')?.value);


    this.productService.addProduct(formData).subscribe((result)=>{
      console.log(result);
    })
    

    
      




  }

 
  ngOnInit(): void {
   
  }

}
