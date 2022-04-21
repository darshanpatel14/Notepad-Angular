import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { loginRes } from "../types/loginRes.model";
import { login } from "../types/login.model";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  isLoggedIn = new Subject<boolean>();
  constructor(private http: HttpClient) {

  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }

  login(data: login): Observable<loginRes> {
    const url = environment.apiUrl + '/login';
    return this.http.post<loginRes>(url, data)
      .pipe(map((res: loginRes) => {
        if (res) {
          localStorage.setItem('token', res.token);
        }
        return res;
      }));
  }

}
