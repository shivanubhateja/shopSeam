import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class listProductsService {
    constructor(private http: HttpClient) {
        
    }
    public getJSON(): Observable<any> {
        return this.http.get("./products.json");
    }
}