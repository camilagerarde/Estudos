import { Negotiation } from './Negotiation';
import { MyObject } from './MyObject';

export class Negotiations implements MyObject<Negotiations> {
  private _negotiations: Negotiation[] = [];

  add(negotiation: Negotiation): void {
    this._negotiations.push(negotiation);
  }

  forArray(): Negotiation[]{
    return ([] as Negotiation[]).concat(this._negotiations);
  }

  forText(): void {
    console.log('-- Impressão --');
    console.log(JSON.stringify(this._negotiations));
  }

  isEqual( negotiations: Negotiations) {
    return JSON.stringify(this._negotiations) == JSON.stringify(negotiations.forArray())
  }
}