import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './home/index/index.component';
import { LoginComponent } from './home/components/login/login.component';
import { WolistComponent } from './home/components/workorder/wolist/wolist.component';
import { WodetailComponent } from './home/components/workorder/wodetail/wodetail.component';
import { WomaterialComponent } from './home/components/workorder/womaterial/womaterial.component';
import { WolaborComponent } from './home/components/workorder/wolabor/wolabor.component';
import { WotoolsComponent } from './home/components/workorder/wotools/wotools.component';
import { WowfComponent } from './home/components/workorder/wowf/wowf.component';
import { WoqueryComponent } from './home/components/workorder/woquery/woquery.component';
import { WoviewComponent } from './home/components/workorder/woview/woview.component';

import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { ApprService } from './services/appr.service';
import { InsertService } from './services/insert.service';
import { LoginService } from './services/login.service';
import { SelectService } from './services/select.service';
import { UpdateService } from './services/update.service';
import { DeletedService } from './services/deleted.service';
import { UserAuthService } from './services/user.auth.service';
import { AlertService } from './services/alert.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/Paginator';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    WolistComponent,
    WodetailComponent,
    WomaterialComponent,
    WolaborComponent,
    WotoolsComponent,
    WowfComponent,
    WoqueryComponent,
    WoviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule, MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    HttpModule,
  ],
  providers: [
    HttpService,
    ApprService,
    InsertService,
    AlertService,
    LoginService,
    SelectService,
    UpdateService,
    DeletedService,
    UserAuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
