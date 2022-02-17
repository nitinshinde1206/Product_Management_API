import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {AccordionModule} from 'primeng/accordion'
import { DialogModule } from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import {TooltipModule} from 'primeng/tooltip';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router'
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DetailsComponent } from './product/details/details.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddproductComponent,
    ProductlistComponent,
    UpdateProductComponent,
    DetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    AccordionModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    RippleModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
