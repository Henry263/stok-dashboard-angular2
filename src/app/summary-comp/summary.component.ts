/**
 * Created by harshilkumar on 4/12/17.
 */

import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "summary-table",
    styleUrls: ["./app/summary-comp/summary.component.css", "./app/style.css"],
    templateUrl: "./app/summary-comp/summary.html",
})

export class SummaryTable {

    ngOnInit() {
        console.log("Summary table loaded");
    }

}