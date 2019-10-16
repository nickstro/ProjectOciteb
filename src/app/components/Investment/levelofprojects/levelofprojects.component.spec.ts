import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelofprojectsComponent } from './levelofprojects.component';

describe('LevelofprojectsComponent', () => {
  let component: LevelofprojectsComponent;
  let fixture: ComponentFixture<LevelofprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelofprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelofprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
