import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungresearchersuptcComponent } from './youngresearchersuptc.component';

describe('YoungresearchersuptcComponent', () => {
  let component: YoungresearchersuptcComponent;
  let fixture: ComponentFixture<YoungresearchersuptcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungresearchersuptcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungresearchersuptcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
