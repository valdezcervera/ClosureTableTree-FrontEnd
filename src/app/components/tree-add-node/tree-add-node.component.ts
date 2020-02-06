import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeChild } from '../../data-types/node'
import { Item } from '../Models/Item';

@Component({
  selector: 'app-tree-add-node',
  templateUrl: './tree-add-node.component.html',
  styleUrls: ['./tree-add-node.component.scss']
})
export class TreeAddNodeComponent implements OnInit {
  @Output() nodeAdd: EventEmitter<any> = new EventEmitter()
  parentsID = ['1'] //TODO: insert ID's from tree recursively
  nodeModel: TNodeChild = new Item('', {id: null})
  
  constructor(private apiClinet: ApiClientService) { }

  ngOnInit() { }

  onSubmit = () => {
      this.apiClinet.addNode(this.nodeModel).subscribe((data: any) => {
        this.parentsID.push(data.id.toString())
        this.nodeAdd.emit()
      })
  }

}