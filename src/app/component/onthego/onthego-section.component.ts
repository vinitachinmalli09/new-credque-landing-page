import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  position: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
}

@Component({
  selector: 'app-onthego-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './onthego-section.component.html',
  styleUrls: ['./onthego-section.component.scss']
})
export class OnthegoSectionComponent {
  featureCards = [
    { title: 'Good Communication', description: 'Intuitive Dashboards - Control at Your Fingertips', position: { left: '90px', top: '260px' }},
    { title: 'Good Communication', description: 'Intuitive Dashboards - Control at Your Fingertips', position: { left: '220px', top: '170px' }},
    { title: 'Good Communication', description: 'Intuitive Dashboards - Control at Your Fingertips', position: { left: '220px', top: '470px' }},
    { title: 'Good Communication', description: 'Intuitive Dashboards - Control at Your Fingertips', position: { right: '220px', top: '170px' }},
    { title: 'Good Communication', description: 'Intuitive Dashboards - Control at Your Fingertips', position: { right: '90px', top: '300px' }},
    { title: 'Good Communication', description: 'Intuitive Dashboards - Control at Your Fingertips', position: { right: '220px', top: '470px' }},
  ];
}