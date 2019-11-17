import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../services/historico.service';
import { Rates } from '../../models/rates.model';
import { Historical } from '../../models/historical.model';

import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styles: []
})
export class HistoricoComponent implements OnInit {

  public historicals: Array<Historical> = [];
  private historical: Historical;
  private rate: Rates;

  subscription: Subscription;

  constructor(
    public historicoService: HistoricoService
  ) {

    this.subscription = this.consultarHistoricoPrecios()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.log('Error en el obs', error),
      () => console.log('el observador terminó')
    );

  }

  ngOnInit() {
    //this.obtenerHistoricoPrecios();
    this.consultarHistoricoPrecios();
  }

  private sumarDiasFechaActual(fecha: Date, dias: number) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  obtenerHistoricoPrecios() {

    this.historicals = [];
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

      this.historicoService.getPrecioHistorico(fecha)
        .subscribe( (historical: Historical) => {

        this.historicals.push(historical);

      });

      contador++;
    }

  }

  // Cada 10 minutos se llama a método de consulta de precios
  consultarHistoricoPrecios(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let contadorSegundos = 0;
      let contadorMinutos = 1;
      const parametroMinuto = 60; // 1 minuto
      const parametroEjecucion = 10; // ejecutar cada 10 minutos

      const intervalo = setInterval( () => {

        if (contadorSegundos === 0) {
          this.obtenerHistoricoPrecios();
        }

        contadorSegundos++;

        // si se cumple condicion, se llama a la consulta de precios historicos
        if (
          contadorSegundos === (contadorMinutos * parametroMinuto * parametroEjecucion)
          ) {
          contadorMinutos++;
          this.obtenerHistoricoPrecios();
        }

      }, 1000); // recorrer cada segundo

    });
  }

}
