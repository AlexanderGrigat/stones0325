import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stones';
  productParent = new Product(0, 'Grabstein Granit', 12.56, 32.45);

  onPriceChange(price: number): void {
    this.productParent.price = price;
    alert('Der Preis sich geändert: ' + price);
  }
}
