import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isProfileStep = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.fb.group({
      // بيانات الخطوة الأولى
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      profileImage: [null],
      
      // بيانات الخطوة الثانية
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      interests: [[]]
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.registerForm.patchValue({
        profileImage: fileInput.files[0]
      });
    }
  }

  continueToNextStep(): void {
    // التحقق من صحة البيانات في الخطوة الأولى
    if (this.validateFirstStep()) {
      this.isProfileStep = false;
    }
  }

  validateFirstStep(): boolean {
    // التحقق من تطابق كلمات المرور
    const passwordControl = this.registerForm.get('password');
    const confirmPasswordControl = this.registerForm.get('confirmPassword');
    
    if (passwordControl?.value !== confirmPasswordControl?.value) {
      // يمكن إضافة رسالة خطأ هنا
      return false;
    }
    
    // التحقق من صحة حقول الخطوة الأولى
    return !!(this.registerForm.get('firstName')?.valid &&
         this.registerForm.get('lastName')?.valid &&
         this.registerForm.get('email')?.valid &&
         this.registerForm.get('password')?.valid &&
         this.registerForm.get('confirmPassword')?.valid &&
         this.registerForm.get('phone')?.valid);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // إرسال البيانات إلى API
      console.log('Form submitted', this.registerForm.value);
      
      // التوجيه إلى الصفحة الرئيسية
      this.router.navigate(['/home']);
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  loginWithGoogle(): void {
    // تنفيذ تسجيل الدخول باستخدام Google
    console.log('Login with Google');
  }

  loginWithFacebook(): void {
    // تنفيذ تسجيل الدخول باستخدام Facebook
    console.log('Login with Facebook');
  }

  // إدارة الوسوم (الاهتمامات)
  availableTags: string[] = [
    'رياضيات', 'فيزياء', 'كيمياء', 'أحياء', 'برمجة', 
    'علوم الحاسب', 'تعلم اللغات', 'التاريخ', 'الجغرافيا'
  ];
  
  filteredTags: string[] = [];
  showSuggestions = false;
  
  filterTags(event: Event): void {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    if (input.length > 0) {
      this.filteredTags = this.availableTags.filter(
        tag => tag.toLowerCase().includes(input)
      );
      this.showSuggestions = true;
    } else {
      this.filteredTags = [];
      this.showSuggestions = false;
    }
  }
  
  addTag(tag: string): void {
    const currentTags = this.registerForm.get('interests')?.value || [];
    if (!currentTags.includes(tag)) {
      this.registerForm.patchValue({
        interests: [...currentTags, tag]
      });
    }
    // إعادة تعيين حقل الإدخال والاقتراحات
    (document.getElementById('tagInput') as HTMLInputElement).value = '';
    this.showSuggestions = false;
  }
  
  removeTag(tagToRemove: string): void {
    const currentTags = this.registerForm.get('interests')?.value;
    this.registerForm.patchValue({
      interests: currentTags.filter((tag: string) => tag !== tagToRemove)
    });
  }
}