import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="relative overflow-hidden" aria-label="Hero">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-12 md:py-28">
        <div class="md:col-span-7">
          <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs dark:border-white/15 dark:bg-night-800/60">
            <span class="h-1.5 w-1.5 rounded-full bg-blood-700"></span>
            <span class="opacity-80">Angular 21 • Tailwind • SSR</span>
          </p>

          <h1 class="text-4xl font-semibold tracking-tight md:text-6xl">
            {{ 'hero.title' | translate }}
          </h1>
          <p class="mt-4 max-w-xl text-base opacity-80 md:text-lg">
            {{ 'hero.subtitle' | translate }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-md bg-ember-500 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-ember-600"
            >
              {{ 'hero.ctaProjects' | translate }}
            </a>
            <a
              href="#resume"
              class="rounded-md border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/15"
            >
              {{ 'hero.ctaResume' | translate }}
            </a>
          </div>
        </div>

        <div class="md:col-span-5">
          <div class="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-soft dark:border-white/15 dark:bg-night-800/60">
            <p class="text-sm opacity-80">{{ 'about.description' | translate }}</p>
          </div>
        </div>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"></div>
    </section>
  `,
})
export class HeroComponent {}
