import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { EducationItem } from '../data/education';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [TranslateModule, RevealDirective],
  template: `
    <section id="education" class="mx-auto max-w-6xl px-4 py-16">
      <div appReveal>
        <h2 class="text-2xl font-semibold">{{ 'education.title' | translate }}</h2>
        <p class="mt-0.5 font-mono text-xs tracking-widest opacity-30">{{ 'education.label' | translate }}</p>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        @for (item of education(); track item.institution + item.start; let i = $index) {
          <article appReveal [delay]="i * 100" class="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/15 dark:bg-night-800/60">
            <h3 class="text-base font-semibold">{{ item.institution }}</h3>
            <p class="mt-2 text-sm opacity-80">{{ item.courseKey | translate }}</p>
            <p class="mt-3 text-sm opacity-70">{{ item.start }}@if (item.end) { — {{ item.end }} }</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class EducationSectionComponent {
  readonly education = input.required<EducationItem[]>();
}
