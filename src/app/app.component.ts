import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    styleUrls: ["./app/style.css"],
    template: `<router-outlet></router-outlet>
               <networthval></networthval>
               <summary-table></summary-table>
               <stockpanel></stockpanel>
                `
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}