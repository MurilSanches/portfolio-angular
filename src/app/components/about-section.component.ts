import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule, RevealDirective],
  template: `
    <section id="about" class="relative mx-auto max-w-6xl overflow-hidden px-4 py-16">
      <!-- Floating decorative blobs -->
      <div class="pointer-events-none absolute -right-16 -top-8 h-72 w-72 animate-float rounded-full bg-ember-500/6 blur-3xl dark:bg-ember-500/10"></div>
      <div class="pointer-events-none absolute -bottom-8 left-0 h-56 w-56 animate-float-slow rounded-full bg-blood-700/5 blur-3xl dark:bg-blood-700/10" style="animation-delay: 3s"></div>

      <div appReveal>
        <h2 class="text-2xl font-semibold">{{ 'about.title' | translate }}</h2>
        <p class="mt-0.5 font-mono text-xs tracking-widest opacity-30">{{ 'about.label' | translate }}</p>
        <p class="mt-3 max-w-3xl text-base leading-relaxed opacity-75">{{ 'about.description' | translate }}</p>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div appReveal [delay]="100" class="rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-3xl font-bold text-ember-600 dark:text-ember-500">5+</p>
          <p class="mt-1 text-sm opacity-70">{{ 'about.statsYears' | translate }}</p>
        </div>
        <div appReveal [delay]="200" class="rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-3xl font-bold text-ember-600 dark:text-ember-500">25+</p>
          <p class="mt-1 text-sm opacity-70">{{ 'about.statsProjects' | translate }}</p>
        </div>
        <div appReveal [delay]="300" class="rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-3xl font-bold text-ember-600 dark:text-ember-500">17+</p>
          <p class="mt-1 text-sm opacity-70">{{ 'about.statsTech' | translate }}</p>
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {}
