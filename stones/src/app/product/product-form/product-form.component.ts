
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  @Output() saveProduct = new EventEmitter<Product>();
  // productForm = new FormGroup({
     // name: new FormControl(''),
     // price: new FormControl(0),
     // weight: new FormControl(0),
   // })

  private readonly fb = inject(FormBuilder);
   productForm = this.fb.group({
    name: [''],
     price: [0],
     weight: [0],
   });

  save(){
    const formValue = this.productForm.value;
    if (formValue.name && formValue.price && formValue.weight) {
    const product = new Product(
      -1,
      formValue.name,
      formValue.price,
      formValue.weight,
    );
 
    this.saveProduct.emit(product);
    this.productForm.reset();
  }
  }
}
