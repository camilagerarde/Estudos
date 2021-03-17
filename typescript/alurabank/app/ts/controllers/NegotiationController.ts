import {
  NegotiationsView,
  MessageView,
} from '../views/index';
import {
  Negotiations,
  Negotiation
} from '../models/index';
import {
  domInject,
  throttle
} from '../helpers/decorators/index'
import {
  NegotiationService,
  HandlerFunction
} from '../services/index';
import {
  print
} from '../helpers/Utils';

export class NegotiationController {
  @domInject('#date')
  private _inputDate: JQuery;
  @domInject('#quantity')
  private _inputQuantity: JQuery;
  @domInject('#value')
  private _inputValue: JQuery;
  private _negotiations = new Negotiations();
  private _negotiationsView = new NegotiationsView('#negotiationsView');
  private _messageView = new MessageView('#messageView');
  private _service = new NegotiationService();

  constructor() {
    this._negotiationsView.update(this._negotiations);
  }

  @throttle()
  add() {
    let date = new Date(this._inputDate.val().replace(/-/g, ','));
    if (!this._notWeekend(date)) {
      this._messageView.update('Somente negociações em dias úteis, por favor!');
      return
    }

    const negotiation = new Negotiation(
      new Date(this._inputDate.val().replace(/-/g, '/')),
      parseInt(this._inputQuantity.val()),
      parseFloat(this._inputValue.val())
    );
    this._negotiations.add(negotiation);
    this._negotiationsView.update(this._negotiations);
    this._messageView.update('Negociação adicionada com sucesso!');
    print(negotiation, this._negotiations)
  }

  private _notWeekend(date: Date) {
    return date.getDay() != DayOfWeek.Saturday && date.getDay() != DayOfWeek.Sunday;
  }

  @throttle()
  async importData() {
    try {
      const negotiationsForImport = await this._service
        .getNegotiation(res => {
          if (res.ok) {
            return res;
          } else {
            throw new Error(res.statusText)
          }
        });

      const negotiationsImported = this._negotiations.forArray();

      negotiationsForImport.filter(negotiation =>
          !negotiationsImported.some(imported =>
            negotiation.isEqual(imported)))
        .forEach(negotiation =>
          this._negotiations.add(negotiation));
      this._negotiationsView.update(this._negotiations);
    } catch(err) {
      this._messageView.update(err.message)
    }
  }
}

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}