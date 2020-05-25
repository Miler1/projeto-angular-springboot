import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  submitted: boolean;

  constructor(private authService: AuthService, 
              private tokenStorage: TokenStorageService, 
              private fb: FormBuilder,
              private router: Router) { }

  loginForm: FormGroup = this.fb.group({
    _id: [null],
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      response => {
        this.submitted = true;
        this.isLoginFailed = true;        
        if (response.status == 0) {
          this.errorMessage = 'Servidor está fora do ar!';
        } else if (response.status == 400 || response.status == 403 || response.status == 404) {
          this.errorMessage = response.error.message;          
        } else if (response.status == 500) {
          this.errorMessage = response.error.message;
        } 
      }
    );
  }

  reloadPage() {
    setTimeout(function(){ window.location.reload(); }, 1000);
    // redirecionar para a pagina de pessoas
    this.router.navigate(['/profile']);
  }

}
