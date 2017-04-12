/**
 * Created by harshilkumar on 4/11/17.
 */

import {Component} from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses watch next</h2>
            {{ title }}
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>
        `
})
export class CoursesComponent {
    title: string = "This is title of the course page";
    courses = ["c1", "c2", "c3"];
}