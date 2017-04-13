/**
 * Created by harshilkumar on 4/12/17.
 */
import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()

export class StockDataService {
    constructor(private http: Http) {}
}