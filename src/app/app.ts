import { Component, signal } from '@angular/core';

import { PROJECTS } from './data/projects';
import { EXPERIENCES } from './data/experience';
import { EDUCATION } from './data/education';
import { SKILLS } from './data/skills';
import { SOCIAL_LINKS } from './data/social';
import { RESUME } from './data/resume';

import { I18nService, type AppLang } from './services/i18n.service';
import { ThemeService } from './services/theme.service';

import { AboutSectionComponent } from './components/about-section.component';
import { ContactSectionComponent } from './components/contact-section.component';
import { EducationSectionComponent } from './components/education-section.component';
import { ExperienceSectionComponent } from './components/experience-section.component';
import { HeroComponent } from './components/hero.component';
import { ProjectsSectionComponent } from './components/projects-section.component';
import { SkillsSectionComponent } from './components/skills-section.component';
import { SiteFooterComponent } from './components/site-footer.component';
import { SiteHeaderComponent } from './components/site-header.component';
import { ResumeSectionComponent } from './components/resume-section.component';

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
    SiteFooterComponent
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
        <app-projects-section [projects]="projects" [githubUrl]="githubUrl()" />
        <app-experience-section [experiences]="experiences" />
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
  styleUrl: './app.css'
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
