import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonChartComponent } from './carbon-chart.component';

describe('CarbonChartComponent', () => {
  let component: CarbonChartComponent;
  let fixture: ComponentFixture<CarbonChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarbonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
