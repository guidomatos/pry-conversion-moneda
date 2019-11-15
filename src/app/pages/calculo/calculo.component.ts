import { Component, OnInit } from '@angular/core';
import { LatestService } from '../../services/latest.service';
import { Rates } from '../../models/rates.model';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styles: []
})
export class CalculoComponent implements OnInit {

  cargando: boolean = true;
  public montoConvertir: number;
  public montoConvertido: number;

  rates: Rates;

  constructor(
    public _latestService: LatestService
  ) { }

  ngOnInit() {
  }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  convertirMoneda(  ) {
    this.cargando = true;

    this._latestService.getLatest()
          .subscribe( (rates: Rates) => {

            this.montoConvertido = this.montoConvertir * rates.USD;

            console.log(rates);
          });

          

    this.cargando = false;

  }

}
