import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyNewRouteComponent } from './lazy-new-route.component';

describe('LazyNewRouteComponent', () => {
  let component: LazyNewRouteComponent;
  let fixture: ComponentFixture<LazyNewRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyNewRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
