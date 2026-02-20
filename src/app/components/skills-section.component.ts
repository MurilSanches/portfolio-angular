import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { Skill } from '../data/skills';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="skills" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'skills.title' | translate }}</h2>

      <div class="mt-8 flex flex-wrap gap-3">
        @for (skill of skills; track skill.name) {
          <span
            class="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold shadow-soft dark:border-white/15 dark:bg-night-800/60"
            [style.borderColor]="skill.color"
          >
            {{ skill.name }}
          </span>
        }
      </div>
    </section>
  `
})
export class SkillsSectionComponent {
  @Input({ required: true }) skills!: Skill[];
}
