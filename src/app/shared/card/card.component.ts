import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cq-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  readonly padded = input(true);
}

