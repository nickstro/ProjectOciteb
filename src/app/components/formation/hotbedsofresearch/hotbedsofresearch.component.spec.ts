import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotbedsofresearchComponent } from './hotbedsofresearch.component';

describe('HotbedsofresearchComponent', () => {
  let component: HotbedsofresearchComponent;
  let fixture: ComponentFixture<HotbedsofresearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotbedsofresearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotbedsofresearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
