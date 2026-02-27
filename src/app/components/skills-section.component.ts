import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { Skill } from '../data/skills';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="skills" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'skills.title' | translate }}</h2>

      <div class="mt-8 flex flex-wrap gap-2.5">
        @for (skill of skills(); track skill.name) {
          <span
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
