import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() productDetails: any;

  productId: any;
  productName: any;
  productCode: any;
  price: any;
  description: any;
  starRating: any;
  imageUrl: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.productDetails);
    this.productName = this.productDetails.productName,
    this.productId = this.productDetails.productId,
    this.productCode = this.productDetails.productCode,
    this.description = this.productDetails.description,
    this.price = this.productDetails.price,
    this.starRating = this.productDetails.starRating,
   this.imageUrl = this.productDetails.imageUrl
  }
}
