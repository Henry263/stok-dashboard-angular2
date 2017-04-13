import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from "./app.component";

/*  Below component is added for testing purpose only. */


import {HeaderComponent} from "./header-comp/header.component";
import {NetworthvalComponent} from "./networthval-comp/networthval.component";
import {SummaryTable} from "./summary-comp/summary.component";
import {StockPanel} from "./stockpanel-comp/stockpanel.component";

/* Below tasks are default tasks. */


import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,

        HeaderComponent,
        NetworthvalComponent,
        SummaryTable,
        StockPanel,

        /* Below task are default task.*/

    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}