import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeParent, TNodeChild } from 'src/app/data-types/node';

@Component({
  selector: 'app-tree-controller-component',
  templateUrl: './tree-controller-component.component.html',
  styleUrls: ['./tree-controller-component.component.scss']
})
export class TreeControllerComponentComponent implements OnInit {

  constructor(private apiClinet: ApiClientService) { }

  tree: TNodeParent[];
  listItems: Array<TNodeChild>;
  parentsID = [];

  treeTraverse(tree) {
    const res = [];
    tree
    ?
    tree.forEach(node => {
      if (node.children.length === 0) { return this.parentsID.push(node.id); }
      this.parentsID.push(node.id);
      this.treeTraverse(node.children);
    })
    :
    res.push('no values found');
    return res;
  }

  ngOnInit() {
    // this.getAllNodes()
    this.apiClinet.getTree().subscribe((data: TNodeParent[]) => {
      this.tree = data.map((node: TNodeParent) => node);
      this.treeTraverse(this.tree);
    });
    this.getListItems();
    console.log('no console please');
  }

  getNotification($event) {
    this.getAllNodes();
    this.removeListItem($event);
  }

  // Tree
  getAllNodes() {
    this.apiClinet.getTree().subscribe((data: TNodeParent[]) => {
      this.tree = data.map((node: TNodeParent) => node);
    });
  }

  removeTreeItem(item) {
    this.apiClinet.removeNode(item.id).subscribe((data: any) => {
      data.map((el) => {
        this.addListItem(el);
        this.spliceIdFromList(el.id);
      });
      this.getAllNodes();
    });
  }
  // handle ParentID's list
  spliceIdFromList(id) {
    let i: any;
    for (i in this.parentsID) {
      if (this.parentsID[i] == id) {
        this.parentsID.splice(i, 1);
        break;
        }
      }
  }
  // List
  getListItems() {
    this.apiClinet.getList().subscribe((data: Array<TNodeChild>) => {
      this.listItems = data.map( (item: TNodeChild) => item);
    });
  }
  removeListItem(id) {
    this.apiClinet.removeListItem(id).subscribe(() => {
      this.getListItems();
    });
  }
  addListItem(item) {
    this.apiClinet.addListItem({name: item.name}).subscribe(() => {
      this.getListItems();
    });
  }
}
