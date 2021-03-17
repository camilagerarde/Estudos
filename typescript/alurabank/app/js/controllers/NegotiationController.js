System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/Utils"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, index_2, index_3, index_4, Utils_1, NegotiationController, DayOfWeek;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._negotiationsView = new index_1.NegotiationsView('#negotiationsView');
                    this._messageView = new index_1.MessageView('#messageView');
                    this._service = new index_4.NegotiationService();
                    this._negotiationsView.update(this._negotiations);
                }
                add() {
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._notWeekend(date)) {
                        this._messageView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negotiation = new index_2.Negotiation(new Date(this._inputDate.val().replace(/-/g, '/')), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update('Negociação adicionada com sucesso!');
                    Utils_1.print(negotiation, this._negotiations);
                }
                _notWeekend(date) {
                    return date.getDay() != DayOfWeek.Saturday && date.getDay() != DayOfWeek.Sunday;
                }
                importData() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const negotiationsForImport = yield this._service
                                .getNegotiation(res => {
                                if (res.ok) {
                                    return res;
                                }
                                else {
                                    throw new Error(res.statusText);
                                }
                            });
                            const negotiationsImported = this._negotiations.forArray();
                            negotiationsForImport.filter(negotiation => !negotiationsImported.some(imported => negotiation.isEqual(imported)))
                                .forEach(negotiation => this._negotiations.add(negotiation));
                            this._negotiationsView.update(this._negotiations);
                        }
                        catch (err) {
                            this._messageView.update(err.message);
                        }
                    });
                }
            };
            __decorate([
                index_3.domInject('#date')
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantity')
            ], NegotiationController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_3.domInject('#value')
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "importData", null);
            exports_1("NegotiationController", NegotiationController);
            (function (DayOfWeek) {
                DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
                DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
                DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
                DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
                DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
                DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
                DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
            })(DayOfWeek || (DayOfWeek = {}));
        }
    };
});
