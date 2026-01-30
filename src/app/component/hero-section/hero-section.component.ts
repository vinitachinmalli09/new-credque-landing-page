// src/app/component/hero-section/hero-section.component.ts
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  readonly mainHeading = signal({
    part1: 'TRACK',
    part2: 'MANAGE',
    part3: 'CONVERT'
  });

  readonly subheading = signal(
    'Experience a CRM that organizes everything you handle and giving you clarity to track smarter and convert faster.'
  );

  readonly chartData = signal({
    employees: 48,
    months: ['Mar', 'Apr', 'May', 'Jun', 'Jul']
  });
}