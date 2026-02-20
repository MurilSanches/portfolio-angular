import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="about" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'about.title' | translate }}</h2>
      <p class="mt-3 max-w-3xl opacity-80">{{ 'about.description' | translate }}</p>
    </section>
  `
})
export class AboutSectionComponent {}
