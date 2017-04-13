/**
 * Created by harshilkumar on 4/12/17.
 */

import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: "header",
    templateUrl: "./app/header-comp/header.html",
    styleUrls: ["./app/header-comp/header.component.css", "./app/style.css"]
})

export class HeaderComponent {
    ngOnInit() {
        console.log("Header component loaded");
    }
}