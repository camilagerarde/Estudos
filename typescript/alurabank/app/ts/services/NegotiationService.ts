import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {
  getNegotiation(handler: HandlerFunction): Promise<Negotiation[]> {
    return fetch('http://localhost:8080/dados')
      .then(res => handler(res))
      .then(res => res.json())
      .then((data: PartialNegotiation[]) => 
        data.map(dado => new Negotiation(new Date(), dado.vezes, dado.montante))
      )
      .catch(err => {
        console.log(err);
        throw new Error('Não foi possível importar as negociações!') 
      });
  }
}

export interface HandlerFunction {
  (res: Response): Response;
}