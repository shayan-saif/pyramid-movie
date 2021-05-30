import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { IUser } from 'src/app/models/auth.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  currentUser: IUser;
  changeForm = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(6)])
  });
  hidePassword: boolean;

  constructor(
    private auth: AuthService, 
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user) => this.currentUser = user);
  }

  onChangePassword(): void {
    console.log(this.changeForm);
    const password = this.changeForm.value.password;
    this.userService.changePassword(this.currentUser._id, password);
  }

}