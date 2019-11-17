import { Rates } from '../models/rates.model';

export class Historical {

    constructor(
        public success: boolean,
        public timestamp: number,
        public historical: boolean,
        public base: string,
        public date: string,
        //public rates: Array<Rates>
        public rates: Rates
    ) {}

}
