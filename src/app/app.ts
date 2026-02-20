import { Component, signal } from '@angular/core';
import { AboutSectionComponent } from './components/about-section.component';
import { ContactSectionComponent } from './components/contact-section.component';
import { EducationSectionComponent } from './components/education-section.component';
import { ExperienceSectionComponent } from './components/experience-section.component';
import { HeroComponent } from './components/hero.component';
import { ProjectsSectionComponent } from './components/projects-section.component';
import { ResumeSectionComponent } from './components/resume-section.component';
import { SiteFooterComponent } from './components/site-footer.component';
import { SiteHeaderComponent } from './components/site-header.component';
import { SkillsSectionComponent } from './components/skills-section.component';
import { EDUCATION } from './data/education';
import { EXPERIENCES } from './data/experience';
import { PROJECTS } from './data/projects';
import { RESUME } from './data/resume';
import { SKILLS } from './data/skills';
import { SOCIAL_LINKS } from './data/social';
import { AppLang, I18nService } from './services/i18n.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    ResumeSectionComponent,
    ContactSectionComponent,
    SiteFooterComponent,
  ],
  template: `
    <div class="min-h-screen bg-fog-50 text-slate-900 dark:bg-night-900 dark:text-fog-100">

      <app-site-header
        [activeLang]="i18n.lang()"
        (langChange)="setLang($event)"
        (toggleTheme)="toggleTheme()"
      />

      <main>
        <app-hero />
        <app-about-section />
        @defer (on viewport) {
          <app-projects-section [projects]="projects" [githubUrl]="githubUrl()" />
        } @placeholder {
          <section class="mx-auto max-w-6xl px-4 py-16">
            <div class="h-8 w-40 rounded bg-black/5 dark:bg-white/10"></div>
            <div class="mt-8 grid gap-6 md:grid-cols-2">
              <div class="h-64 rounded-2xl border border-black/10 bg-white/40 dark:border-white/15 dark:bg-night-800/40"></div>
              <div class="h-64 rounded-2xl border border-black/10 bg-white/40 dark:border-white/15 dark:bg-night-800/40"></div>
            </div>
          </section>
        }

        @defer (on viewport) {
          <app-experience-section [experiences]="experiences" />
        } @placeholder {
          <section class="mx-auto max-w-6xl px-4 py-16">
            <div class="h-8 w-48 rounded bg-black/5 dark:bg-white/10"></div>
            <div class="mt-8 h-72 rounded-2xl border border-black/10 bg-white/40 dark:border-white/15 dark:bg-night-800/40"></div>
          </section>
        }
        <app-education-section [education]="education" />
        <app-skills-section [skills]="skills" />
        <app-resume-section [resumePtBrUrl]="resumePtBrUrl" [resumeEnUrl]="resumeEnUrl" />
        <app-contact-section
          [email]="email"
          [socialLinks]="socialLinks"
        />
      </main>

      <app-site-footer [year]="currentYear()" />
    </div>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio-2');
  protected readonly currentYear = signal(new Date().getFullYear());

  protected readonly projects = PROJECTS;
  protected readonly experiences = EXPERIENCES;
  protected readonly education = EDUCATION;
  protected readonly skills = SKILLS;
  protected readonly socialLinks = SOCIAL_LINKS;

  protected readonly email = 'murilosanchesp@gmail.com';
  protected readonly resumePtBrUrl = RESUME.ptBr;
  protected readonly resumeEnUrl = RESUME.en;

  constructor(
    protected readonly i18n: I18nService,
    private readonly theme: ThemeService
  ) {}

  setLang(lang: AppLang) {
    this.i18n.setLang(lang);
  }

  toggleTheme() {
    this.theme.toggle();
  }

  githubUrl(): string {
    const github = this.socialLinks.find((s) => s.label === 'github');
    return github?.href ?? 'https://github.com';
  }
}
