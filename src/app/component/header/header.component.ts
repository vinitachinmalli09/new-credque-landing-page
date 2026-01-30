import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly isMobileMenuOpen = signal(false);
  readonly showFeaturesDropdown = signal(false);
  readonly showResourcesDropdown = signal(false);

  readonly anyDropdownOpen = computed(
    () => this.showFeaturesDropdown() || this.showResourcesDropdown()
  );

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
    if (!this.isMobileMenuOpen()) {
      this.closeDropdowns();
    }
  }

  toggleFeaturesDropdown() {
    this.showFeaturesDropdown.update((open) => !open);
    this.showResourcesDropdown.set(false);
  }

  toggleResourcesDropdown() {
    this.showResourcesDropdown.update((open) => !open);
    this.showFeaturesDropdown.set(false);
  }

  closeDropdowns() {
    this.showFeaturesDropdown.set(false);
    this.showResourcesDropdown.set(false);
  }
}