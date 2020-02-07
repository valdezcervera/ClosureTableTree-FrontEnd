import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeChild, TNodeParent } from '../../data-types/node'
import { Item } from '../Models/Item';

@Component({
  selector: 'app-tree-add-node',
  templateUrl: './tree-add-node.component.html',
  styleUrls: ['./tree-add-node.component.scss']
})
export class TreeAddNodeComponent implements OnInit {

  constructor(private apiClinet: ApiClientService) { }

  @Output() 
  nodeAdd: EventEmitter<any> = new EventEmitter<any>()
  @Input() 
  tree: TNodeParent
  @Input()
  listItems: Array<Object>
  @Input()
  parentsID //TODO: insert ID's from tree recursively
  nodeModel: TNodeChild = new Item('', { id: null })

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

  ngOnInit() { }

  onSubmit = () => {
    this.apiClinet.addNode(this.nodeModel).subscribe((data: any) => {
      this.parentsID.push(data.id.toString())
      this.nodeAdd.emit(data)
    })
  }

}