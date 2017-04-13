/**
 * Created by harshilkumar on 4/12/17.
 */

import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "networthval",
    templateUrl: "./app/networthval-comp/networthval.html",
    styleUrls: ["./app/networthval-comp/networthval.component.css", "./app/style.css"]
})

export class NetworthvalComponent {
    ngOnInit() {
        console.log("Networth value component loaded.");
    }

}