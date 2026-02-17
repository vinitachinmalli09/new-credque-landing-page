import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { IconComponent } from '../../shared/icon/icon.component';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly isMobileMenuOpen = signal(false);
  readonly showFeaturesDropdown = signal(false);
  readonly showResourcesDropdown = signal(false);
  readonly isModalOpen = signal(false);
  readonly isSubmitting = signal(false);

  readonly anyDropdownOpen = computed(
    () => this.showFeaturesDropdown() || this.showResourcesDropdown()
  );

  private readonly EMAILJS_PUBLIC_KEY  = 'Wk947pMJo6VZ3ZXsI';
  private readonly EMAILJS_SERVICE_ID  = 'service_e75mrbk';
  private readonly EMAILJS_TEMPLATE_ID = 'template_wpg6o07';

  formData = { name: '', email: '', phone: '', message: '' };

  // Validation errors
  errors = { name: '', email: '' };

  // Validation rules
  validateName(value: string): string {
    if (!value.trim()) return 'Name is required.';
    if (!/^[a-zA-Z\s]+$/.test(value)) return 'Only characters allowed in name.';
    return '';
  }

  validateEmail(value: string): string {
    if (!value.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
    return '';
  }

  // Live validation on input
  onNameInput()  { this.errors.name  = this.validateName(this.formData.name);   }
  onEmailInput() { this.errors.email = this.validateEmail(this.formData.email); }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
    if (!this.isMobileMenuOpen()) this.closeDropdowns();
  }

  toggleFeaturesDropdown(): void {
    this.showFeaturesDropdown.update((open) => !open);
    this.showResourcesDropdown.set(false);
  }

  toggleResourcesDropdown(): void {
    this.showResourcesDropdown.update((open) => !open);
    this.showFeaturesDropdown.set(false);
  }

  closeDropdowns(): void {
    this.showFeaturesDropdown.set(false);
    this.showResourcesDropdown.set(false);
  }

  openModal(): void  { this.isModalOpen.set(true);  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.resetForm();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

  async onSubmit(): Promise<void> {
    // Run all validations
    this.errors.name  = this.validateName(this.formData.name);
    this.errors.email = this.validateEmail(this.formData.email);

    // Stop if any error
    if (this.errors.name || this.errors.email) return;

    // Check other required fields
    if (!this.formData.message.trim()) {
      alert('⚠️ Please enter a message.');
      return;
    }

    this.isSubmitting.set(true);

    const templateParams = {
      from_name:    this.formData.name,
      from_email:   this.formData.email,
      phone_number: this.formData.phone || 'Not provided',
      message:      this.formData.message
    };

    try {
      const response = await emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      );
      console.log('SUCCESS!', response.status);
      alert('✅ Demo request submitted! We will contact you shortly.');
      this.closeModal();

    } catch (error) {
      console.error('FAILED...', error);
      alert('❌ Failed to send. Please try again.');

    } finally {
      this.isSubmitting.set(false);
    }
  }

  resetForm(): void {
    this.formData = { name: '', email: '', phone: '', message: '' };
    this.errors   = { name: '', email: '' };
  }
}