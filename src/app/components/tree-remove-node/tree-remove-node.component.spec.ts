import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRemoveNodeComponent } from './tree-remove-node.component';

describe('TreeRemoveNodeComponent', () => {
  let component: TreeRemoveNodeComponent;
  let fixture: ComponentFixture<TreeRemoveNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeRemoveNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeRemoveNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
