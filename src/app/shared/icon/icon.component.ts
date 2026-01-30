import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'cq-icon',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input(20);
  readonly strokeWidth = input(2);
}

