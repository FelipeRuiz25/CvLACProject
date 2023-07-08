import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarArticleChartComponent } from './radar-article-chart.component';

describe('RadarArticleChartComponent', () => {
  let component: RadarArticleChartComponent;
  let fixture: ComponentFixture<RadarArticleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarArticleChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadarArticleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
