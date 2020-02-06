import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeAddNodeComponent } from './tree-add-node.component';

describe('TreeAddNodeComponent', () => {
  let component: TreeAddNodeComponent;
  let fixture: ComponentFixture<TreeAddNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeAddNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeAddNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
