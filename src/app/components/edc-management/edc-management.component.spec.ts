import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcManagementComponent } from './edc-management.component';

describe('EdcManagementComponent', () => {
  let component: EdcManagementComponent;
  let fixture: ComponentFixture<EdcManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdcManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdcManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
