import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeParent } from 'src/app/data-types/node';

@Component({
  selector: 'app-tree-controller-component',
  templateUrl: './tree-controller-component.component.html',
  styleUrls: ['./tree-controller-component.component.scss']
})
export class TreeControllerComponentComponent implements OnInit {

  constructor(private apiClinet: ApiClientService) { }

  tree: TNodeParent[];
  listItems: Array<Object>
  parentsID = ['1'] //Set root node id.

  ngOnInit() {
    this.getAllNodes()
    this.getListItems()
  }

  getNotification($event) {
    this.getAllNodes()
    this.removeListItem($event.name)
    console.log($event)
  }

  //Tree
  getAllNodes() {
    this.apiClinet.getTree().subscribe((data: TNodeParent[]) => {
      this.tree = data.map((node: TNodeParent) => node)
    })
  }

  removeTreeItem(item) {
    this.addListItem(item)
    this.removeParentIdFromList(item.id)
    this.apiClinet.removeNode(item.id).subscribe((data: any) => {
      this.getAllNodes()
      console.log(data)
    })
  }
  // handle ParentID list
  removeParentIdFromList(id) {
    let i:any  
  for(i in this.parentsID){
    if(this.parentsID[i]==id){
      this.parentsID.splice(i,1);
        break;
      }
    }
  }
  //List
  getListItems() {
    this.apiClinet.getList().subscribe((data: Array<Object>) => {
      this.listItems = data.map( (item: Object) => item)
    })
  }
  removeListItem(id) {
    this.apiClinet.removeListItem(id).subscribe(() => {
      this.getListItems()
    })
  }
  addListItem(item) {
    this.apiClinet.addListItem({name: item.name}).subscribe(() => {
      this.getListItems()
    })
  }
}
