import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungresearcherscolcienciasComponent } from './youngresearcherscolciencias.component';

describe('YoungresearcherscolcienciasComponent', () => {
  let component: YoungresearcherscolcienciasComponent;
  let fixture: ComponentFixture<YoungresearcherscolcienciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungresearcherscolcienciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungresearcherscolcienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
