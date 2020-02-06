export class Item {
  constructor(
    public name: string,
    public parent: {
        id: number
    }
  ) {}
}