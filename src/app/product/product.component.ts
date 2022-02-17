import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddproductComponent } from './addproduct/addproduct.component';
import { Product } from './Model/product';
import { ProductService } from './product.service';

interface Language {
  name: string,
  code: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent implements OnInit {
  languages: Language[] = [];
  selectedLanguage!: Language;
  //translatedText: any;
  
  display: boolean = false;
  toBeUpdateProduct : any;
  displayUpdate : boolean = false;
  displaydetails : boolean = false;
  displayProduct: any;
  products!: Product[];

  constructor(private product: ProductService,private router: Router,
    private messageService: MessageService) {

      this.languages = [
        {name: 'हिंदी', code: 'Hi'},
        {name: 'मराठी', code: 'mr'},
        {name: '汉语/漢語', code: 'lzh'},
        {name: 'français', code: 'fr'},
        {name: 'ગુજરાતી', code: 'gu'}
    ];    
  }

  allProducts(data: Product[]) {
    this.products = data;  
    console.log(data); 
  }

  updateDialogDisplay(productData : any){
    //console.log(productData);
    this.displayUpdate = true;
    this.toBeUpdateProduct = productData;
  }

  updateCloseDialog(data : any){
    this.messageService.add({ severity: 'success', summary: 'Product Updated' });
    this.product.getAllProducts().subscribe(res => {
      this.allProducts(res);     
    });
    this.displayUpdate = !data;
  }
  logout(){
    localStorage.removeItem('jwt');
    this.router.navigate(["/"]);
  }

  onLanguageSelected(val: any){
    //console.log(this.selectedLanguage.name + " & Code is "+ this.selectedLanguage.code);
    
    this.product.translateLanguage(val, this.products[0].description).subscribe( res => {
      console.log(res);
     // this.translatedText = res;     
    }, err => {
      console.log(err);
    });
  }

  delete(id: any) {
    //alert("Do you realy want to delete the Product");
     this.product.deleteProduct(id).subscribe(res => {      
      this.messageService.add({ severity: 'error', summary: 'Product Deleted' });
      this.product.getAllProducts().subscribe(res => {
        this.allProducts(res);
      });
     });
  }

  addProduct() {
    this.display = true;
  }

  showDetails(data: any){
    this.displaydetails = true;
    this.displayProduct = data; 
  }
  
  closeDialog(data: any) {    
    this.messageService.add({ severity: 'success', summary: 'Product Added' });
    this.product.getAllProducts().subscribe(res => {
      this.allProducts(res);
    });
    this.display = !data;
  }

  ngOnInit() {
    this.product.getAllProducts().subscribe(res => {
      console.log(res);
      this.products = res;
      this.allProducts(res);      
    });
  }

}
