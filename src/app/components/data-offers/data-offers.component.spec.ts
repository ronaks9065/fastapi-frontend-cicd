import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOffersComponent } from './data-offers.component';

describe('DataOffersComponent', () => {
  let component: DataOffersComponent;
  let fixture: ComponentFixture<DataOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
