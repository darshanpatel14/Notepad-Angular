import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  flagsCheck = false;
  message = "";
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  checkLogin() {
    this.flagsCheck = true;
    this.loginService.login(this.loginForm.value).subscribe(res => {
      if (res) {
        this.message = "login success";
        this.loginService.isLoggedIn.next(true);
        this.toastr.success('Successfully logged in!', 'Success!');
        this.router.navigate(['/']);
      } else {
        this.message = "Username or password is incorrect";
        this.toastr.success('Successfully logged in!', 'Success!');
      }
    }, (err) => {
      this.message = "Username or password is incorrect";
      this.toastr.error('Username or password is incorrect!', 'Error!');
    })
  }
}
