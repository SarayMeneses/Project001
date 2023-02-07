import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddressComponent } from './service-address.component';

describe('ServiceAddressComponent', () => {
  let component: ServiceAddressComponent;
  let fixture: ComponentFixture<ServiceAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
