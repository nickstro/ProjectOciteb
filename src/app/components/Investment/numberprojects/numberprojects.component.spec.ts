import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberprojectsComponent } from './numberprojects.component';

describe('NumberprojectsComponent', () => {
  let component: NumberprojectsComponent;
  let fixture: ComponentFixture<NumberprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
