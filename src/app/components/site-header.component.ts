import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { AppLang } from '../services/i18n.service';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <header class="sticky top-0 z-50 border-b border-black/5 bg-fog-50/70 backdrop-blur dark:border-white/10 dark:bg-night-900/70">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          type="button"
          class="flex items-center gap-2 font-semibold tracking-wide"
          (click)="toggleTheme.emit()"
          aria-label="Toggle theme"
        >
          <span class="inline-block h-2 w-2 rounded-full bg-ember-500 shadow-[0_0_20px_rgba(217,119,6,0.65)]"></span>
          <span class="text-sm">{{ 'hero.title' | translate }}</span>
        </button>

        <nav class="hidden items-center gap-6 md:flex">
          <a class="text-sm opacity-80 hover:opacity-100" href="#about">{{ 'nav.about' | translate }}</a>
          <a class="text-sm opacity-80 hover:opacity-100" href="#projects">{{ 'nav.projects' | translate }}</a>
          <a class="text-sm opacity-80 hover:opacity-100" href="#experience">{{ 'nav.experience' | translate }}</a>
          <a class="text-sm opacity-80 hover:opacity-100" href="#education">{{ 'nav.education' | translate }}</a>
          <a class="text-sm opacity-80 hover:opacity-100" href="#skills">{{ 'nav.skills' | translate }}</a>
          <a class="text-sm opacity-80 hover:opacity-100" href="#contact">{{ 'nav.contact' | translate }}</a>
        </nav>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-md border border-black/10 px-3 py-1 text-sm dark:border-white/15"
            (click)="langChange.emit('pt-br')"
            [class.opacity-50]="activeLang !== 'pt-br'"
          >
            PT
          </button>
          <button
            type="button"
            class="rounded-md border border-black/10 px-3 py-1 text-sm dark:border-white/15"
            (click)="langChange.emit('en')"
            [class.opacity-50]="activeLang !== 'en'"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  `
})
export class SiteHeaderComponent {
  @Input({ required: true }) activeLang!: AppLang;

  @Output() langChange = new EventEmitter<AppLang>();
  @Output() toggleTheme = new EventEmitter<void>();
}
