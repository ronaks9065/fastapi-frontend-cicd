import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataOffersComponent } from './create-data-offers.component';

describe('CreateDataOffersComponent', () => {
  let component: CreateDataOffersComponent;
  let fixture: ComponentFixture<CreateDataOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDataOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDataOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
