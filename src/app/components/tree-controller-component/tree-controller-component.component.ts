import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeParent } from 'src/app/data-types/node';

@Component({
  selector: 'app-tree-controller-component',
  templateUrl: './tree-controller-component.component.html',
  styleUrls: ['./tree-controller-component.component.scss']
})
export class TreeControllerComponentComponent implements OnInit {

  public tree: TNodeParent[];

  getNotification() {
    this.getAllNodes()
  }

// treeTraverse(tree) {
//   let res=[]
//   tree.forEach(node => {
//     if (node.children.length === 0) return res.push(node)
//     res.push({name: node.name, id: node.id})
//     console.log('node', node)      
//       this.treeTraverse(node.children)
//     });
//   return res
// }

  constructor(private apiClinet: ApiClientService) { }

  getAllNodes () {
  this.apiClinet.getTree().subscribe((data: TNodeParent[]) => {
    this.tree = data.map((node: TNodeParent) => node)
  })
  }

  ngOnInit() { 
    this.getAllNodes()
  }

}
