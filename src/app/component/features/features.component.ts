import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: string;
  label: string;
  image: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent {

  selectedFeature = signal('users');

  features = signal<Feature[]>([
    { id: 'dashboard', label: 'Dashboard', image: 'assets/features-section/user.png' },
    { id: 'cold-calling', label: 'Cold Calling', image: 'assets/features-section/user.png' },
    { id: 'leads', label: 'Leads', image: 'assets/features-section/user.png' },
    { id: 'dialer', label: 'Dialer', image: 'assets/features-section/user.png' },
    { id: 'payout', label: 'Payout', image: 'assets/features-section/user.png' },
    { id: 'agreement', label: 'Agreement', image: 'assets/features-section/user.png' },
    { id: 'connector', label: 'Connector', image: 'assets/features-section/user.png' },
    { id: 'banks', label: 'Banks', image: 'assets/features-section/user.png' },
    { id: 'backend', label: 'Backend Processing', image: 'assets/features-section/user.png' },
    { id: 'campaign', label: 'Campaign', image: 'assets/features-section/user.png' },
    { id: 'agent-report', label: 'Agent Report', image: 'assets/features-section/user.png' },
    { id: 'users', label: 'Users', image: 'assets/features-section/Users-img.png' }
  ]);

  selectFeature(id: string) {
    this.selectedFeature.set(id);
  }

  handleImageError(event: Event, feature: Feature) {
    console.error('Image failed:', feature.label, feature.image);
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
