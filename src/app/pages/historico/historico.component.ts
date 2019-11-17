import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/historico.service';
import { Rates } from '../../models/rates.model';
import { Historical } from '../../models/historical.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styles: []
})
export class HistoricoComponent implements OnInit {

  public historicals: Array<Historical> = [];
  private historical: Historical;
  //private rates: Array<Rates> = [];
  private rate: Rates;

  constructor(
    public historicoService: HistoricoService
  ) { }

  ngOnInit() {
    this.obtenerHistoricoPrecios();
  }

  private sumarDiasFechaActual(fecha: Date, dias: number){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  obtenerHistoricoPrecios(  ) {

    let fechaActual = new Date();
    fechaActual = this.sumarDiasFechaActual(fechaActual, 1);
    let contador = 1;
    const contadorDias = 3;
    while (contador <= contadorDias) {

      const fechaConsulta = this.sumarDiasFechaActual(fechaActual, -1);

      const anio = fechaConsulta.getFullYear();
      const mes = (fechaConsulta.getMonth() + 1);
      const dia = fechaConsulta.getDate();

      const fecha = anio + '-' + mes + '-' + dia;

      
      this.rate = new Rates(
        100 * contador,
        200 * contador,
        300 * contador,
        400 * contador,
        500 * contador
      );

      this.historical = new Historical(
        true,
        1573775999,
        true,
        'EUR',
        fecha,
        this.rate
      );

      this.historicals.push(this.historical);
      
      /*
      this.historicoService.getPrecioHistorico(fecha)
        .subscribe( (historical: Historical) => {

        this.historicals.push(historical);

      });
      */

      contador++;
    }

    return false;

  }

}
