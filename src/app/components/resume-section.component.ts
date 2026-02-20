import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="resume" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'resume.title' | translate }}</h2>

      <div class="mt-8 grid gap-4 md:grid-cols-2">
        <a
          class="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft hover:bg-white dark:border-white/15 dark:bg-night-800/60 dark:hover:bg-night-800"
          [href]="resumePtBrUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-sm font-semibold">{{ 'resume.openPt' | translate }}</p>
          <p class="mt-2 text-sm opacity-70">PDF</p>
        </a>
        <a
          class="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft hover:bg-white dark:border-white/15 dark:bg-night-800/60 dark:hover:bg-night-800"
          [href]="resumeEnUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-sm font-semibold">{{ 'resume.openEn' | translate }}</p>
          <p class="mt-2 text-sm opacity-70">PDF</p>
        </a>
      </div>
    </section>
  `,
})
export class ResumeSectionComponent {
  readonly resumePtBrUrl = input.required<string>();
  readonly resumeEnUrl = input.required<string>();
}
