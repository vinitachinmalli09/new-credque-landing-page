import { Component } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';
import { FeaturesComponent } from './component/features/features.component';
import { OnthegoSectionComponent } from './component/onthego/onthego-section.component';
import { HowCredqueWorksComponent } from './component/how-credque-works/how-credque-works.component';
import { BuiltForTeamsComponent } from './component/built-for-teams/built-for-teams.component';
import { CredqueAdvantageComponent } from './component/credque-advantage/credque-advantage.component';
import { TestimonialComponent } from './component/testimonials/testimonial.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { FooterComponent } from './component/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    FeaturesComponent,
    OnthegoSectionComponent,
    HowCredqueWorksComponent,
    BuiltForTeamsComponent,
    CredqueAdvantageComponent,
    TestimonialComponent,
    PricingComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'cqdialwebsite';
}