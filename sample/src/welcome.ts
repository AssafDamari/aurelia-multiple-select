import { autoinject, computedFrom } from 'aurelia-framework';

export class Welcome {



  constructor(public items: string[] = []) {
    for (let i = 0; i < 1000; i++) {
      this.items.push("Item " + i.toString());
    }
  }

}
