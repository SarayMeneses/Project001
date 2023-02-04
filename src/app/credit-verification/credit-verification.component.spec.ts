import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditVerificationComponent } from './credit-verification.component';

describe('CreditVerificationComponent', () => {
  let component: CreditVerificationComponent;
  let fixture: ComponentFixture<CreditVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
