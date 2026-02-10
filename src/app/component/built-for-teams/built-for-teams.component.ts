import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-built-for-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-for-teams.component.html',
  styleUrls: ['./built-for-teams.component.scss']
})
export class BuiltForTeamsComponent {

  teams = [
    { name: 'Fintech Companies', image: 'assets/built-for-teams-section/Fintech companies.png' },
    { name: 'Loan DSA\'s', image: 'assets/built-for-teams-section/Loan DSA.png' },
    { name: 'Banks & Financial Advisors', image: 'assets/built-for-teams-section/Bank & Financial advisor.png' },
    { name: 'Insurance Agencies', image: 'assets/built-for-teams-section/Loan agencies.png' }
  ];

}