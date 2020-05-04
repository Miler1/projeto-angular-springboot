import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form: any = {};
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage = '';
  roles: string[] = [];
  submitted: boolean = false;

  constructor(private authService: AuthService, 
              private fb: FormBuilder,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  registerForm: FormGroup = this.fb.group({
    _id: [null],
    username: ['', [Validators.required]],
    email:    ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isSuccessful = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      data => {
        // console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.snackBar.open('Usuário cadastrado com sucesso!', 'Fechar');
        this.router.navigate(['/login']);
      },
      response => {
        this.submitted = true;
        this.isSignUpFailed = true;
        this.isSuccessful = false;
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

}
