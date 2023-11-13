import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailFoodComponent } from './customer-detail-food.component';

describe('CustomerDetailFoodComponent', () => {
  let component: CustomerDetailFoodComponent;
  let fixture: ComponentFixture<CustomerDetailFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
