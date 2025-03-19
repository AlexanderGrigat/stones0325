import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from '../../utils/utils.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductListComponent,
        ProductComponent,
      ],
      imports:[
        ReactiveFormsModule,
        UtilsModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
