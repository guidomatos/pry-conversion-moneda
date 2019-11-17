import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { Conversion } from '../models/conversion.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, ACCESS_KEY } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LatestService {

  public url: string;

  constructor(
    public http: HttpClient
  ) { }

  getLatest() {

    const url = URL_SERVICIOS + '/latest?access_key=' + ACCESS_KEY + '&base=' + 'EUR' + '&symbols=' + 'USD,AUD,CAD,PLN,MXN';

    return this.http.get( url )
                  .map( (resp: any) => resp.rates );

  }

}
