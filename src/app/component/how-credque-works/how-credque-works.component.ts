import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-credque-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-credque-works.component.html',
  styleUrls: ['./how-credque-works.component.scss']
})
export class HowCredqueWorksComponent {

  works = [
    {
      title: 'Capture & Organize Leads',
      description:
        'Easily import and organize all your leads in one place, so nothing slips through the cracks.',
      image: 'assets/how-credque-work/image.png'
    },
    {
      title: 'Application Tracking',
      description:
        'Follow each loan application through every stage, without manual updates or guesswork.',
      image: 'assets/how-credque-work/image.png'
    },
    {
      title: 'Automate Follow-ups',
      description:
        'Set automated reminders and messages to stay on top of every lead without extra effort.',
      image: 'assets/how-credque-work/image.png'
    },
    {
      title: 'Performance Tracking',
      description:
        'Get clear insights with performance reports to optimize your sales strategy and boost conversions.',
      image: 'assets/how-credque-work/image.png'
    }
  ];

}
