import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    template: `<p>This is modified file.</p>
                <courses></courses>
                <router-outlet></router-outlet>
                `
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}