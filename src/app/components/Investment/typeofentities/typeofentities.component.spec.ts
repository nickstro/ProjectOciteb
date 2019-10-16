import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofentitiesComponent } from './typeofentities.component';

describe('TypeofentitiesComponent', () => {
  let component: TypeofentitiesComponent;
  let fixture: ComponentFixture<TypeofentitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeofentitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
