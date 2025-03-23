import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  ngOnInit(): void {
    // أي إعدادات إضافية يمكن وضعها هنا
  }

  // للوصول السهل لحقول النموذج
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // توقف إذا كان النموذج غير صالح
    if (this.loginForm.invalid) {
      return;
    }

    // هنا يمكنك إضافة منطق تسجيل الدخول الحقيقي
    console.log('Login credentials', this.loginForm.value);
    
    // للتجربة: انتقل إلى الصفحة الرئيسية
    this.router.navigate(['/home']);
  }

  socialLogin(provider: string) {
    console.log(`Login with ${provider}`);
    // هنا يمكنك إضافة منطق تسجيل الدخول عبر وسائل التواصل الاجتماعي
    
    // للتجربة: انتقل إلى الصفحة الرئيسية
    this.router.navigate(['/home']);
  }
}