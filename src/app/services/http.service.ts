import { Injectable } from '@angular/core';
import { Http, Headers, Response, ResponseContentType} from '@angular/http';
import { BehaviorSubject,  Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import encodeQueryData from '../../utility/encodeQueryData';
import { AlertService } from './alert.service';
//import { ProcessingService } from './processing.service';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private alertService: AlertService,
  ) { }

  get(url , data= {}, headers) {
    console.log('http.get data:' + JSON.stringify(data));
    //const headers = new Headers();
    //this.createAuthorizationHeader(headers);
    // const processing = { level, id: randomRocessId() };
    // this.processingService.add(processing);
    return this.http.get(url + '?' + encodeQueryData(data), {
      headers: headers
    });
    // .map(this.responseHandler.bind(this, processing));
    // .catch(this.errorHandler.bind(this, processing, 'get', url, data));
  }

  post(url, data, headers) {
    console.log('http.post data:' + JSON.stringify(data))
    return this.http.post(url, data, {
      headers: headers
    })
  }

}
