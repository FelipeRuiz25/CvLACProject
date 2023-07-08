import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalIdChartComponent } from './international-id-chart.component';

describe('InternationalIdChartComponent', () => {
  let component: InternationalIdChartComponent;
  let fixture: ComponentFixture<InternationalIdChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalIdChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternationalIdChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
