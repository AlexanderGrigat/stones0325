import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product: Product = new Product(0, 'Grabstein Granit', 12.56, 32.45)

  showPrice(): void {
    alert(this.product.price)
  }

  increasePrice(): void {
    this.product.price += 5
    alert(this.product.price)
  }
}
