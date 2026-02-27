import { Component, computed, input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import type { Project } from '../data/projects';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <section id="projects" class="mx-auto max-w-6xl px-4 py-16">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-2xl font-semibold">{{ 'projects.title' | translate }}</h2>
        <a
          class="text-sm font-semibold text-ember-600 hover:underline dark:text-ember-500"
          [href]="githubUrl()"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ 'projects.viewOnGithub' | translate }}
        </a>
      </div>

      <!-- Featured projects (with screenshots) -->
      <div class="mt-8 grid gap-6 md:grid-cols-2">
        @for (project of featuredProjects(); track project.name) {
          <article class="group overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-soft dark:border-white/15 dark:bg-night-800/60">
            <div class="relative">
              <img
                [src]="selectedImage(project)"
                [alt]="project.name"
                class="h-56 w-full object-cover opacity-95 transition duration-300 group-hover:opacity-100"
                loading="lazy"
              />

              <div class="absolute left-3 top-3 flex flex-wrap gap-2">
                @for (tag of project.tags; track tag) {
                  <span class="rounded bg-night-800/70 px-2 py-1 text-xs font-semibold text-fog-100 dark:bg-night-950/70">
                    {{ tag }}
                  </span>
                }
              </div>
            </div>

            <div class="space-y-3 p-6">
              <h3 class="text-lg font-semibold tracking-tight">{{ project.name }}</h3>
              <p class="text-sm opacity-80">{{ project.descriptionKey | translate }}</p>
              <div class="flex items-center justify-between gap-4">
                <div class="flex gap-2">
                  @for (img of project.images; track img) {
                    <button
                      type="button"
                      class="overflow-hidden rounded-md"
                      (click)="selectImage(project, img)"
                      [attr.aria-label]="project.name + ' image'"
                    >
                      <img
                        [src]="img"
                        alt=""
                        class="h-10 w-16 rounded-md object-cover transition"
                        [class.opacity-100]="selectedImage(project) === img"
                        [class.opacity-70]="selectedImage(project) !== img"
                        [class.ring-2]="selectedImage(project) === img"
                        [class.ring-ember-500]="selectedImage(project) === img"
                        loading="lazy"
                      />
                    </button>
                  }
                </div>
                <a
                  class="rounded-md bg-ember-500 px-4 py-2 text-sm font-semibold text-white hover:bg-ember-600"
                  [href]="project.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ 'projects.openRepo' | translate }}
                </a>
              </div>
            </div>
          </article>
        }
      </div>

      <!-- Additional repos (compact cards) -->
      @if (additionalProjects().length) {
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (project of additionalProjects(); track project.name) {
            <a
              [href]="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col justify-between rounded-xl border border-black/10 bg-white/70 p-5 shadow-soft transition hover:border-ember-500/40 hover:shadow-deep dark:border-white/15 dark:bg-night-800/60 dark:hover:border-ember-500/30"
            >
              <div>
                <div class="flex items-start justify-between gap-2">
                  <h3 class="text-sm font-semibold leading-snug group-hover:text-ember-600 dark:group-hover:text-ember-500">
                    {{ project.name }}
                  </h3>
                  <svg class="mt-0.5 h-4 w-4 shrink-0 opacity-40 transition group-hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                  </svg>
                </div>
                <p class="mt-2 text-xs leading-relaxed opacity-70">
                  {{ project.descriptionKey | translate }}
                </p>
              </div>
              <div class="mt-4 flex flex-wrap gap-1.5">
                @for (tag of project.tags; track tag) {
                  <span class="rounded-full border border-black/10 bg-fog-100/70 px-2.5 py-0.5 text-xs font-medium dark:border-white/10 dark:bg-night-900/60">
                    {{ tag }}
                  </span>
                }
              </div>
            </a>
          }
        </div>
      }
    </section>
  `,
})
export class ProjectsSectionComponent {
  readonly projects = input.required<Project[]>();
  readonly githubUrl = input.required<string>();

  protected readonly selectedImageByProjectName = signal<Record<string, string>>({});

  protected readonly featuredProjects = computed(() =>
    this.projects().filter((p) => p.images.length > 0)
  );

  protected readonly additionalProjects = computed(() =>
    this.projects().filter((p) => p.images.length === 0)
  );

  protected selectedImage(project: Project): string {
    const selected = this.selectedImageByProjectName()[project.name];
    return selected ?? project.images[0];
  }

  protected selectImage(project: Project, img: string) {
    this.selectedImageByProjectName.update((curr) => ({
      ...curr,
      [project.name]: img,
    }));
  }
}
