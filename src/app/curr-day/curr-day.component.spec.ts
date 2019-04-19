import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrDayComponent } from './curr-day.component';

describe('CurrDayComponent', () => {
  let component: CurrDayComponent;
  let fixture: ComponentFixture<CurrDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
