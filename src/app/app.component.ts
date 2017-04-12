import {Component, OnInit} from "@angular/core";
//import {CoursesComponent} from "./courses.component";

@Component({
    selector: "app",
    template: "<p>This is modified file.</p><courses></courses>"
    //directives: [CoursesComponent]
    //templateUrl: "./app/app.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}