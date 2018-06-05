import { Injectable } from '@angular/core';

@Injectable()
export class InsertService {

  constructor() { }

  createHeadersData(headers: Headers) {
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('Content-Type', 'application/json;charset=utf-8');
  }

}
