import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerChildrenOverrideComponent } from './eager-children-override.component';

describe('EagerChildrenOverrideComponent', () => {
  let component: EagerChildrenOverrideComponent;
  let fixture: ComponentFixture<EagerChildrenOverrideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EagerChildrenOverrideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerChildrenOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
