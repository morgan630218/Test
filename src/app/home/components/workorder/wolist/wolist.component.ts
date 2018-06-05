import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Services } from '@angular/core/src/view';
// import { MatTableDataSource } from '@angular/material/table';
import { Http, Headers } from '@angular/http';
import { SelectService } from '../../../../services/select.service';
// import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatPaginator, PageEvent, MatSort, Sort, MatPaginatorIntl } from '@angular/material';
//import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { WoModel } from "../../../../models/wo-model";
import encodeQueryData from '../../../../../utility/encodeQueryData';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-wolist',
  templateUrl: './wolist.component.html',
  styleUrls: ['./wolist.component.css']
})
export class WolistComponent implements OnInit {

  sel_field_const = 'wolo9,wonum,siteid,lead,owner,schedstart';

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;

  wolistDataSource = new MatTableDataSource<any>();

  currentPage: PageEvent;
  currentSort: Sort;
  totalCount: number;
  currentFilterData: string;
  qryData: any;
  whereQryData: string;
  url_const: string = `${environment.BASE_MAXIMO_WO_URL}`;

  //TEST
  selectWonum: string;
  // wolistModelList = new Observable<WolistModel[]>();
  woModelList = new Array<WoModel>();

  constructor(
    private selectService: SelectService,
    private http: Http, private matPaginatorIntl: MatPaginatorIntl
  ) { }

  ngOnInit() {
    this.getData(0, 10);
    // 分頁切換時，重新取得資料
    // this.paginator.page.subscribe((page: PageEvent) => {
    //   this.getData(page.pageIndex, page.pageSize);
    // });
  }


  getData(pageIndex, pageSize) {
    // console.log('init currentFilterData=' + this.currentFilterData);
    // this.queryApiService.getQueryResult(pageIndex, pageSize , this.currentFilterData , this.currentSort).subscribe(

    this.whereQryData = 'siteid="BEDFORD"';
    this.qryData = this.getWoQryparam(pageIndex, pageSize, this.sel_field_const, this.whereQryData);
    this.selectService.getPostQueryResult(pageIndex, pageSize, this.currentFilterData, this.currentSort, this.url_const, this.qryData).subscribe(
      (data: any) => {
        this.totalCount = JSON.parse(data._body).responseInfo.totalCount;
        let index: number;
        index = JSON.parse(data._body).member == null ? 0 : (JSON.parse(data._body).member).length;
        console.log('index[' + index + ']');
        for (i = 0; i < index; i++) {
          // let wolistModel: WolistModel = new WolistModel().deserialize(this.wolistDataSource.data[i]);
          let wolistModel: WoModel = new WoModel().deserialize(JSON.parse(data._body).member[i]);
          this.woModelList.push(wolistModel);
        }
        this.wolistDataSource.data = this.woModelList;
      });

    let i: number;
    for (i = 0; i < 10; i++) {
      var singleObject = this.wolistDataSource.data[i];
      console.log("Value of key singleObject==>" + this.wolistDataSource.data);
    }
  }

  getWoQryparam(pageIndex, pageSize, selectStr, whereStr) {
    return {
      lean: 1,
      _lid: 'maxadmin',
      _lpwd: 'zaq1xsW2',
      'oslc.select': selectStr,
      'oslc.where': whereStr,
      stablepaging: 1,
      'oslc.pageSize': pageSize,
      pageno: pageIndex * pageSize + 1,

    };
  }

}
