import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsScreenComponent } from './graphics-screen.component';

describe('GraphicsScreenComponent', () => {
  let component: GraphicsScreenComponent;
  let fixture: ComponentFixture<GraphicsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
