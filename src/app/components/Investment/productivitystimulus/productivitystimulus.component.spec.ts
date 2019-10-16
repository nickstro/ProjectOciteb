import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitystimulusComponent } from './productivitystimulus.component';

describe('ProductivitystimulusComponent', () => {
  let component: ProductivitystimulusComponent;
  let fixture: ComponentFixture<ProductivitystimulusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivitystimulusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivitystimulusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
