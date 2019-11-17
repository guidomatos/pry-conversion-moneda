import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, ACCESS_KEY } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  public url: string;

  constructor(
    public http: HttpClient
  ) { }

  getPrecioHistorico(FechaConsulta: string) {

    const url = URL_SERVICIOS + '/' + FechaConsulta + '?access_key=' + ACCESS_KEY + '&base=' + 'EUR' + '&symbols=' + 'USD,AUD,CAD,PLN,MXN';

    return this.http.get( url )
                  //.map( (resp: any) => resp.rates );
                  .map( (resp: any) => resp );

  }

}
