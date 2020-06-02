import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WebServiceService {
  baseUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(this.baseUrl);
  }
}
