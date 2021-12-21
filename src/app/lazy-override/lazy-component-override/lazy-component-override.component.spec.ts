import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyComponentOverrideComponent } from './lazy-component-override.component';

describe('LazyComponentOverrideComponent', () => {
  let component: LazyComponentOverrideComponent;
  let fixture: ComponentFixture<LazyComponentOverrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyComponentOverrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyComponentOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
