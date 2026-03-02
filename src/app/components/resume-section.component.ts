import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="resume" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'resume.title' | translate }}</h2>

      <div class="mt-8">
        <a
          class="inline-flex items-center gap-4 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft transition-colors hover:bg-white dark:border-white/15 dark:bg-night-800/60 dark:hover:bg-night-800"
          [href]="resumeUrl()"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <div>
            <p class="text-sm font-semibold">{{ 'resume.download' | translate }}</p>
            <p class="mt-1 text-xs opacity-50">PDF</p>
          </div>
        </a>
      </div>
    </section>
  `,
})
export class ResumeSectionComponent {
  readonly resumeUrl = input.required<string>();
}
