export class TNodeParent {
    "id": number;
    "name": string;
    "children": TNodeParent[];
}
export class TNodeChild {
    "name": string;
    "parent": {
                "id": number
    		}
	}