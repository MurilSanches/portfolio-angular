import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLang = 'pt-br' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<AppLang>('pt-br');

  constructor(private readonly translate: TranslateService) {
    this.translate.setDefaultLang('pt-br');
    this.setLang('pt-br');
  }

  setLang(next: AppLang) {
    this.lang.set(next);
    this.translate.use(next);

    if (typeof document !== 'undefined') {
      document.documentElement.lang = next;
    }
  }
}
