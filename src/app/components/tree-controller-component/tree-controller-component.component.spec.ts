import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeControllerComponentComponent } from './tree-controller-component.component';

describe('TreeControllerComponentComponent', () => {
  let component: TreeControllerComponentComponent;
  let fixture: ComponentFixture<TreeControllerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeControllerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeControllerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
