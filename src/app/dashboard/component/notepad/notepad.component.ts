import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/service/login.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  constructor(private logInService: LoginService, private router: Router) {
  }
  ngOnInit(): void {
  }


  logout() {
    this.logInService.logout();
    this.router.navigate(['/login']);
  }

}
