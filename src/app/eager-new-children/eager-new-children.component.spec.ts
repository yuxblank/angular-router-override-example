import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerNewChildrenComponent } from './eager-new-children.component';

describe('EagerNewChildrenComponent', () => {
  let component: EagerNewChildrenComponent;
  let fixture: ComponentFixture<EagerNewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerNewChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerNewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
