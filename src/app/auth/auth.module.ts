import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { LoginService } from "./service/login.service";

const routes = [{
  path: "login",
  component: LoginComponent
}]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, // required animations module
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class AuthModule { }