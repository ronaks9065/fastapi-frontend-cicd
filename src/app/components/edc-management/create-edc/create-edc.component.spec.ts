import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEdcComponent } from './create-edc.component';

describe('CreateEdcComponent', () => {
  let component: CreateEdcComponent;
  let fixture: ComponentFixture<CreateEdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEdcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
