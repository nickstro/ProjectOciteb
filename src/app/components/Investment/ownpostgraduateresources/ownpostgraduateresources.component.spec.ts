import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnpostgraduateresourcesComponent } from './ownpostgraduateresources.component';

describe('OwnpostgraduateresourcesComponent', () => {
  let component: OwnpostgraduateresourcesComponent;
  let fixture: ComponentFixture<OwnpostgraduateresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnpostgraduateresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnpostgraduateresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
