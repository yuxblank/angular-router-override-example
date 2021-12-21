import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOverrideComponent } from './test-override.component';

describe('TestOverrideComponent', () => {
  let component: TestOverrideComponent;
  let fixture: ComponentFixture<TestOverrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOverrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
