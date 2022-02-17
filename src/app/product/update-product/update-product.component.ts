import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  @Input()  productDetails: any;
  @Output() dataUpdatedSuccess = new EventEmitter<boolean>();

  profileForm = new FormGroup({
    productId: new FormControl(null, [Validators.required]),
    productName: new FormControl(null, [Validators.required]),
    productCode: new FormControl(null,Validators.required),
    price: new FormControl(null,Validators.required),
    description: new FormControl(),
    starRating: new FormControl(),
    imageUrl: new FormControl(),
  });

  constructor(private productService: ProductService) {
    //console.log(this.productDetails);
   }

  ngOnInit(): void {
    //console.log(this.productDetails)
    
  }

  ngOnChanges() {
    this.profileForm.setValue({
      productId: this.productDetails.productId,
      productName: this.productDetails.productName,
      productCode: this.productDetails.productCode,
      price: this.productDetails.price,
      description: this.productDetails.description,
      starRating: this.productDetails.starRating,
      imageUrl: this.productDetails.imageUrl,    
    });    
  }

  onSubmit() {
    if (this.profileForm.valid) {
      if (this.profileForm.value.starRating == null) {
        this.profileForm.value.starRating = this.productDetails.starRating;
      }
      var productData = {
        productId: this.profileForm.value.productId,
        productName: this.profileForm.value.productName,
        productCode : this.profileForm.value.productCode,
        price: this.profileForm.value.price,        
        description: this.profileForm.value.description,
        starRating: this.profileForm.value.starRating,
        imageUrl: this.profileForm.value.imageUrl
      }      
      this.productService.updateProduct(productData).subscribe(res => {        
        this.callParent(res);
      });
      
    }
  }
  callParent(data : any){
    this.dataUpdatedSuccess.emit(data);
  }

}
