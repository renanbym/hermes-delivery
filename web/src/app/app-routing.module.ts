import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsPageComponent},
  { path: 'products', component: ProductsPageComponent}
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 