import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="about" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'about.title' | translate }}</h2>
      <p class="mt-0.5 font-mono text-xs tracking-widest opacity-30">{{ 'about.label' | translate }}</p>
      <p class="mt-3 max-w-3xl text-base leading-relaxed opacity-75">{{ 'about.description' | translate }}</p>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-3xl font-bold text-ember-600 dark:text-ember-500">5+</p>
          <p class="mt-1 text-sm opacity-70">{{ 'about.statsYears' | translate }}</p>
        </div>
        <div class="rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-3xl font-bold text-ember-600 dark:text-ember-500">25+</p>
          <p class="mt-1 text-sm opacity-70">{{ 'about.statsProjects' | translate }}</p>
        </div>
        <div class="rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-3xl font-bold text-ember-600 dark:text-ember-500">17+</p>
          <p class="mt-1 text-sm opacity-70">{{ 'about.statsTech' | translate }}</p>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {}
