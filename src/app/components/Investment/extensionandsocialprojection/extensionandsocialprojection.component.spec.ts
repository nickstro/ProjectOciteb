import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionandsocialprojectionComponent } from './extensionandsocialprojection.component';

describe('ExtensionandsocialprojectionComponent', () => {
  let component: ExtensionandsocialprojectionComponent;
  let fixture: ComponentFixture<ExtensionandsocialprojectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionandsocialprojectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionandsocialprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
