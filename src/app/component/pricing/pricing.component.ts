import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  recommended: boolean;
  benefits: string[];
  isCustom: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  selectedBillingCycle: 'monthly' | 'quarterly' | 'yearly' = 'monthly';

  plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: '799',
      period: '/Agent',
      description: 'Best for agents below 10',
      recommended: false,
      isCustom: false,
      benefits: [
        'Centralized lead management',
        'Clean dashboards',
        'Task reminders & follow-ups',
        'Clean dashboards',
        'Basic pipeline tracking'
      ]
    },
    {
      name: 'Business',
      price: '999',
      period: '/Agent',
      description: 'Best for agents in between 10-100',
      recommended: true,
      isCustom: false,
      benefits: [
        'Advanced lead automation',
        'Smart follow up workflows',
        'Real time performance insights',
        'Mobile CRM for field teams',
        '7 free transfers every month',
        'User hierarchy and roles',
        'All the benefits in starter'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      period: '',
      description: 'Best for agents more than 100',
      recommended: false,
      isCustom: true,
      benefits: [
        'Fully customizable workflows',
        'Scalable for large teams',
        'Priority customer support',
        'Custom report analytics',
        'Advanced access control',
        'All the benefits in business'
      ]
    }
  ];

  selectBillingCycle(cycle: 'monthly' | 'quarterly' | 'yearly'): void {
    this.selectedBillingCycle = cycle;
  }

  onGetStarted(planName: string): void {
    console.log(`Get started clicked for plan: ${planName}`);
    // Add your navigation or modal logic here
  }
}