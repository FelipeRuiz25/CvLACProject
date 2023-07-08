import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorCvComponent } from './investigator-cv.component';

describe('InvestigatorCvComponent', () => {
  let component: InvestigatorCvComponent;
  let fixture: ComponentFixture<InvestigatorCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigatorCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestigatorCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
