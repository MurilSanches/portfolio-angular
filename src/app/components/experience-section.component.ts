import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { Experience } from '../data/experience';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="experience" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'experience.title' | translate }}</h2>

      <div class="mt-8">
        <ol class="relative border-s border-black/10 ps-6 dark:border-white/15">
          @for (item of experiences; track item.company + item.position) {
            <li class="relative pb-10 last:pb-0">
              <span class="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border border-black/20 bg-ember-500 shadow-[0_0_18px_rgba(217,119,6,0.35)] dark:border-white/20"></span>

              <article class="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/15 dark:bg-night-800/60">
                <div class="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3 class="text-lg font-semibold">{{ item.position }}</h3>
                    <p class="text-sm opacity-80">{{ item.company }}</p>
                  </div>
                  <p class="text-sm opacity-70">
                    {{ item.start }} — {{ item.end ? item.end : ('experience.present' | translate) }}
                  </p>
                </div>

                <p class="mt-4 text-sm opacity-80">{{ item.descriptionKey | translate }}</p>

                @if (item.keyPointsKeys?.length) {
                  <ul class="mt-4 list-disc space-y-2 pl-5 text-sm opacity-85">
                    @for (k of item.keyPointsKeys ?? []; track k) {
                      <li>{{ k | translate }}</li>
                    }
                  </ul>
                }

                @if (item.achievementsKeys?.length) {
                  <div class="mt-4">
                    <p class="text-sm font-semibold">{{ 'experience.achievementsTitle' | translate }}</p>
                    <ul class="mt-2 list-disc space-y-2 pl-5 text-sm opacity-85">
                      @for (a of item.achievementsKeys ?? []; track a) {
                        <li>{{ a | translate }}</li>
                      }
                    </ul>
                  </div>
                }
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `
})
export class ExperienceSectionComponent {
  @Input({ required: true }) experiences!: Experience[];
}
