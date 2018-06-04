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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
