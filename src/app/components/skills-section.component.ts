import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { Skill } from '../data/skills';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [TranslateModule, RevealDirective],
  template: `
    <section id="skills" class="relative mx-auto max-w-6xl overflow-hidden px-4 py-16">
      <!-- Floating blob -->
      <div class="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-float-slow rounded-full bg-blood-700/4 blur-3xl dark:bg-blood-700/8"></div>

      <div appReveal>
        <h2 class="text-2xl font-semibold">{{ 'skills.title' | translate }}</h2>
        <p class="mt-0.5 font-mono text-xs tracking-widest opacity-30">{{ 'skills.label' | translate }}</p>
      </div>

      <div class="mt-8 flex flex-wrap gap-2.5">
        @for (skill of skills(); track skill.name; let i = $index) {
          <span
            appReveal [delay]="i * 40"
            class="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-soft dark:border-white/15 dark:bg-night-800/60"
          >
            <span
              class="h-2 w-2 shrink-0 rounded-full"
              [style.background]="skill.color"
            ></span>
            {{ skill.name }}
          </span>
        }
      </div>
    </section>
  `,
})
export class SkillsSectionComponent {
  readonly skills = input.required<Skill[]>();
}
