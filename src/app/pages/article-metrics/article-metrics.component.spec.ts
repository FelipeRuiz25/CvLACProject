import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMetricsComponent } from './article-metrics.component';

describe('ArticleMetricsComponent', () => {
  let component: ArticleMetricsComponent;
  let fixture: ComponentFixture<ArticleMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleMetricsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
