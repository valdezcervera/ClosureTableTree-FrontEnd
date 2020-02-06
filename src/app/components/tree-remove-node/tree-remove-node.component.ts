import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeChild } from '../../data-types/node'
import { Item } from '../Models/Item';

@Component({
  selector: 'app-tree-remove-node',
  templateUrl: './tree-remove-node.component.html',
  styleUrls: ['./tree-remove-node.component.scss']
})
export class TreeRemoveNodeComponent implements OnInit {
  @Output() nodeRemove: EventEmitter<any> = new EventEmitter()
  nodeID = ['1'] //TODO: insert ID's from tree recursively

  constructor() { }

  ngOnInit() {
  }

  onSubmit = () => {
    // this.apiClinet.removeNode(this.nodeModel).subscribe((data: any) => {
    //   this.nodeRemove.emit()
    // })
    alert('item removed')
}
}
