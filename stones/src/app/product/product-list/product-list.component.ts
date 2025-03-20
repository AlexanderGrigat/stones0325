import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../service/product.service';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgClass } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports:[
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
    ProductComponent,
    NgClass,
    RouterLink
  ],
})
export class ProductListComponent {
  products: Observable<Product[]> = inject(ProductService).getList();

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }
}
