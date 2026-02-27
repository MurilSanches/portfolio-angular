import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section class="relative overflow-hidden" aria-label="Hero">
      <!-- Decorative blobs -->
      <div class="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl dark:bg-ember-500/5"></div>
      <div class="pointer-events-none absolute -top-10 right-1/4 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-400/5"></div>

      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-12 md:py-28">
        <div class="md:col-span-7">
          <!-- Available badge -->
          <p class="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs dark:border-white/15 dark:bg-night-800/60">
            <span class="relative flex h-1.5 w-1.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
            </span>
            <span class="opacity-80">{{ 'hero.badge' | translate }}</span>
          </p>

          <h1 class="text-4xl font-semibold tracking-tight md:text-6xl">
            {{ 'hero.title' | translate }}
          </h1>
          <p class="mt-2 text-lg font-medium text-ember-600 dark:text-ember-500">
            {{ 'hero.role' | translate }}
          </p>
          <p class="mt-4 max-w-xl text-base opacity-70 md:text-lg">
            {{ 'hero.subtitle' | translate }}
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              class="rounded-md bg-ember-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-ember-600"
            >
              {{ 'hero.ctaProjects' | translate }}
            </a>
            <a
              href="#contact"
              class="rounded-md border border-black/10 px-5 py-2.5 text-sm font-semibold hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              {{ 'hero.ctaContact' | translate }}
            </a>
            <a
              href="#resume"
              class="rounded-md border border-black/10 px-5 py-2.5 text-sm font-semibold hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/5"
            >
              {{ 'hero.ctaResume' | translate }}
            </a>
          </div>
        </div>

        <div class="md:col-span-5">
          <div class="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-soft dark:border-white/15 dark:bg-night-800/60">
            <p class="mb-4 text-xs font-semibold uppercase tracking-widest opacity-50">{{ 'hero.cardTitle' | translate }}</p>
            <p class="text-sm leading-relaxed opacity-80">{{ 'about.description' | translate }}</p>

            <div class="mt-5 grid grid-cols-3 gap-3 border-t border-black/5 pt-5 dark:border-white/10">
              <div>
                <p class="text-xl font-bold">4+</p>
                <p class="text-xs opacity-60">{{ 'hero.statsYears' | translate }}</p>
              </div>
              <div>
                <p class="text-xl font-bold">8+</p>
                <p class="text-xs opacity-60">{{ 'hero.statsProjects' | translate }}</p>
              </div>
              <div>
                <p class="text-xl font-bold">13+</p>
                <p class="text-xs opacity-60">{{ 'hero.statsTech' | translate }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10"></div>
    </section>
  `,
})
export class HeroComponent {}
