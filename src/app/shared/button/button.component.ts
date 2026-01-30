import { ChangeDetectionStrategy, Component, OutputEmitterRef, input, output } from '@angular/core';
import { CqButtonVariant } from './button.types';

@Component({
  selector: 'cq-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  readonly variant = input<CqButtonVariant>('primary');
  readonly type = input<'button' | 'submit'>('button');
  readonly fullWidth = input(false);

  readonly clicked: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}

