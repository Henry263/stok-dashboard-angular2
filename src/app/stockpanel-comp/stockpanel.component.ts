/**
 * Created by harshilkumar on 4/12/17.
 */

import {Component, style} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "stockpanel",
    templateUrl: "./app/stockpanel-comp/stockpanel.html",
    styleUrls: ["./app/stockpanel-comp/stockpanel.component.css", "./app/style.css"]
})
export class StockPanel {
    ngOnInit() {
        console.log("Stock Panel component loaded");
    }
}
