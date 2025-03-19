import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  heute = new Date();
  title = 'stones';

  onPriceChange(price: number): void{
    alert('Der Preis hat sich geändert: '+ price);
  }

  // onSaveProduct(newProduct: Product){
  //   this.products.unshift(newProduct);
  // }
}
