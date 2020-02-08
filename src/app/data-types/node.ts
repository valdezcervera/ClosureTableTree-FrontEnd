export class TNodeParent {
    "id": number;
    "name": string;
    "children": TNodeParent[];
}
export class TNodeChild {
    "id": number
    "name": string;
    "parent": {
        "id": number
    }
}