import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOrderCustomerComponent } from './detail-order-customer.component';

describe('DetailOrderCustomerComponent', () => {
  let component: DetailOrderCustomerComponent;
  let fixture: ComponentFixture<DetailOrderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOrderCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOrderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
