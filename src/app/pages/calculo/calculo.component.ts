import { Component, OnInit } from '@angular/core';
import { LatestService } from '../../services/latest.service';
import { Rates } from '../../models/rates.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styles: []
})
export class CalculoComponent implements OnInit {

  public montoConvertir: number;
  public montoConvertido: number;

  rates: Rates;

  constructor(
    public _latestService: LatestService
  ) { }

  ngOnInit() {
  }

  convertirMoneda(  ) {

    if (this.montoConvertir === undefined) {

      Swal.fire({
        icon: 'info',
        title: 'Advertencia',
        html: 'Debe ingresar monto a convertir',
        footer: ''
      });

      return false;
    }

    if (this.montoConvertir <= 0) {

      Swal.fire({
        icon: 'info',
        title: 'Advertencia',
        html: 'Debe ingresar monto a convertir mayor a 0',
        footer: ''
      });

      return false;
    }

    //this.montoConvertido = this.montoConvertir * 1.10;

    this._latestService.getLatest()
          .subscribe( (rates: Rates) => {

            this.montoConvertido = this.montoConvertir * rates.USD;

            console.log(rates);
          });


  }

}
