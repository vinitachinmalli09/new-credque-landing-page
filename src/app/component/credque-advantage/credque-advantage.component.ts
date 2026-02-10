import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credque-advantage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credque-advantage.component.html',
  styleUrls: ['./credque-advantage.component.scss']
})
export class CredqueAdvantageComponent {
  advantages = [
    {
      title: 'Data Accuracy & Product Intelligence',
      detail: 'CredQue provides bank product details with 95% accuracy, allowing advisors to suggest the best financial products to customers instantly through a digital interface.'
    },
    {
      title: '"Skyrocket" Sales Velocity',
      detail: 'By integrating APIs that bring all bank details onto a single page, your sales team doesn\'t have to waste time searching multiple portals, leading to faster deal closures.'
    },
    {
      title: 'Bank-Grade Data Security',
      detail: 'Built on AWS infrastructure with a "walled garden" architecture. Data is encrypted at rest and in transit, making it virtually impossible for unauthorized external parties to access or decrypt.'
    },
    {
      title: 'End-to-End Lead Lifecycle Management',
      detail: 'From lead capture to documentation and final approval, CredQue automates the "manual effort" of uploading files and tracking daily activities like call-backs and status updates.'
    },
    {
      title: 'Built Specifically for the Lending Ecosystem',
      detail: 'Unlike generic CRMs, CredQue is designed specifically for Loan Service Providers, DSAs, and Freelancers, addressing their unique workflow needs in the Indian lending market.'
    }
  ];
}