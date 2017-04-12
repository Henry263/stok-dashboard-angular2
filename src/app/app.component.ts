import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    template: `<p>This is modified file.</p>
                <courses></courses>
                <header></header>
                `
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}