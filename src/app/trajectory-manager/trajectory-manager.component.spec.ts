import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectoryManagerComponent } from './trajectory-manager.component';

describe('TrajectoryManagerComponent', () => {
  let component: TrajectoryManagerComponent;
  let fixture: ComponentFixture<TrajectoryManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectoryManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
