import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AjaxError } from 'rxjs/ajax';
import { LoginService } from '../../service/login/login.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  private authService = inject(LoginService)
  private fb = inject(FormBuilder)
  private router = inject(Router)

  loginForm: FormGroup = this.fb.group(
    {
      email : [''], password:[""]
    }
  );

   get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  
  login() {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
    .then(() => {
      this.router.navigate(['/dashboard']);
    })
    .catch((error) => console.error('Error en login:', error));

  }
}
