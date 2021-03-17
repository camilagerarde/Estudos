import { Printed } from '../models/Printed';

export function print(...objetos: Printed[]) {
    objetos.forEach(objeto => objeto.forText());
}