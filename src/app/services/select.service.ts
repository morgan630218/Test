import { Injectable } from '@angular/core';

import { HttpService } from './http.service';


@Injectable()
export class SelectService {

  constructor(private httpService: HttpService) { }

  createHeadersData(headers: Headers) {
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json;charset=utf-8');
  }

  getPostQueryResult(pageIndex, pageSize, currentFilterData, currentSort, url, data) {
    const headers = new Headers();
    this.createHeadersData(headers);

//    const baseUrl = 'http://vm-win2012r2.com.tw:9080/maximo/oslc/os/mxwo';
    console.log('baseUrl=' + url);
    return this.httpService.get(url,
      // {
      //   lean: 1,
      //   _lid: 'maxadmin',
      //   _lpwd: 'zaq1xsW2',
      //   'oslc.select': 'wolo9,wonum,siteid,lead,owner,schedstart',
      //   'oslc.where': 'siteid="BEDFORD"',
      //   stablepaging: 1,
      //   'oslc.pageSize': pageSize,
      //   pageno: pageIndex * pageSize + 1,
      // }
      data
      , headers);
  }









}
