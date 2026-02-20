import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { SocialLink } from '../data/social';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="contact" class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-semibold">{{ 'contact.title' | translate }}</h2>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <article class="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-sm font-semibold">{{ 'contact.email' | translate }}</p>
          <a class="mt-2 block text-sm text-ember-600 hover:underline dark:text-ember-500" [href]="mailto()">
            {{ email() }}
          </a>
          <p class="mt-6 text-sm font-semibold">{{ 'contact.social' | translate }}</p>
          <div class="mt-2 flex flex-wrap gap-3">
            @for (s of socialLinks(); track s.href) {
              <a
                class="rounded-md border border-black/10 bg-white/70 px-3 py-2 text-sm font-semibold shadow-soft hover:bg-white dark:border-white/15 dark:bg-night-900/60 dark:hover:bg-night-800"
                [href]="s.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ s.label.toUpperCase() }}
              </a>
            }
          </div>
        </article>

        <article class="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft dark:border-white/15 dark:bg-night-800/60">
          <p class="text-sm font-semibold">{{ 'contact.mailto.title' | translate }}</p>
          <p class="mt-2 text-sm opacity-80">
            {{ 'contact.mailto.description' | translate }}
          </p>
          <a
            class="mt-6 inline-flex rounded-md bg-ember-500 px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-ember-600"
            [href]="mailto('Contato pelo portfólio', 'Olá Murilo! Vi seu portfólio e gostaria de conversar.')"
          >
            {{ 'contact.mailto.cta' | translate }}
          </a>
        </article>
      </div>
    </section>
  `,
})
export class ContactSectionComponent {
  readonly email = input.required<string>();
  readonly socialLinks = input.required<SocialLink[]>();

  protected mailto(subject?: string, body?: string) {
    const qs = new URLSearchParams();
    if (subject) qs.set('subject', subject);
    if (body) qs.set('body', body);
    const suffix = qs.toString() ? `?${qs.toString()}` : '';
    return `mailto:${this.email()}${suffix}`;
  }
}
