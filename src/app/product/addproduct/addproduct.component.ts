import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [MessageService]
})
export class AddproductComponent implements OnInit {

  @Output() dataAddedsSuccess = new EventEmitter<boolean>();
  
  profileForm = new FormGroup({
    ProductId: new FormControl(null, [Validators.required]),
    ProductName: new FormControl(null, [Validators.required]),
    ProductCode: new FormControl(null,Validators.required),
    Price: new FormControl(null,Validators.required),
    Description: new FormControl(),
    StarRating: new FormControl(),
    ImageUrl: new FormControl(),
  });

  constructor(private productService: ProductService, private messageService : MessageService) { }
  

  ngOnInit():void {
  }
  
  onSubmit() {
    if(this.profileForm.valid){
      if(this.profileForm.value.StarRating == null){
        this.profileForm.value.StarRating = 1;
      }
      var productData = {
        ProductId: this.profileForm.value.ProductId,
        ProductName: this.profileForm.value.ProductName,
        ProductCode : this.profileForm.value.ProductCode,
        Price: this.profileForm.value.Price,        
        Description: this.profileForm.value.Description,
        StarRating: this.profileForm.value.StarRating,
        ImageUrl: this.profileForm.value.ImageUrl
      }
            
      this.productService.addProduct(productData).subscribe(res =>{        
        this.callParent(res);
      });
      this.profileForm.reset();
      
    }
  }
  callParent(data : any){
    this.dataAddedsSuccess.emit(data);
  }

}
