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

  constructor(private apiClinet: ApiClientService) { }

  @Output() nodeRemove: EventEmitter<any> = new EventEmitter()
  nodeID = new Item('', { id: null })

  ngOnInit() {
  }

  onSubmit = () => {
    // this.apiClinet.removeNode(this.nodeModel).subscribe((data: any) => {
    //   this.nodeRemove.emit()
    // })
    alert('item removed')
  }
}
