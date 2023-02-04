import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedProductsComponent } from './speed-products.component';

describe('SpeedProductsComponent', () => {
  let component: SpeedProductsComponent;
  let fixture: ComponentFixture<SpeedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
