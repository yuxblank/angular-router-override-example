import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibChildrenComponent } from './test-lib-children.component';

describe('TestLibChildrenComponent', () => {
  let component: TestLibChildrenComponent;
  let fixture: ComponentFixture<TestLibChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLibChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
