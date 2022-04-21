import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from './auth/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  subscription: Subscription = new Subscription;
  isLoggedIn: boolean = true;
  constructor(private router: Router, private authService: LoginService) {

  }

  ngOnInit(): void {
    this.subscription = this.authService.isLoggedIn
      .subscribe((isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn
      })

    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  title = 'notepad';

}
