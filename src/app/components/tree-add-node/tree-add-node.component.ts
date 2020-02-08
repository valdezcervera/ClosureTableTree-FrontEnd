import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiClientService } from 'src/app/api-client.service';
import { TNodeChild, TNodeParent } from '../../data-types/node'
import { Item } from '../Models/Item';
import { parse, stringify } from 'querystring';

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
  listItems: Array<TNodeChild>
  @Input()
  parentsID 
  nodeModel: TNodeChild = new Item(null, '', { id: null })

  ngOnInit() { }

  onSubmit = () => {
      //save model id from this context
    const modelId: any = this.nodeModel.id
      // get the list item which corresponds to our nodeModel. Note: nodeModel.id was converted
      // to a string by ngModel.
    const filteredListItem = this.listItems.filter((el) => el.id === parseInt(modelId));
      // assing the proper name to our model for this context.
    this.nodeModel.name = filteredListItem[0].name
      // add the new node to the tree
    this.apiClinet.addNode(this.nodeModel).subscribe((data: any) => {
      this.parentsID.push(data.id.toString())
        // with the modelId from our working context, remove it from the db-listItems
      this.nodeAdd.emit(modelId)
    })
  }

}