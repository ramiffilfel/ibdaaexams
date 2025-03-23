import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent }, // إضافة مسار صفحة التسجيل
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  // أضف المسارات الأخرى حسب الحاجة
];