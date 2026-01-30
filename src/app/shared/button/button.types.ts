export type CqButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface CqButtonConfig {
  id: string;
  label: string;
  variant?: CqButtonVariant;
}

