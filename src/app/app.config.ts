import { HttpClient, provideHttpClient } from '@angular/common/http';
import {
  type ApplicationConfig,
  Injectable,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule, type TranslationObject } from '@ngx-translate/core';
import { type Observable, of } from 'rxjs';

@Injectable()
export class AppTranslateHttpLoader implements TranslateLoader {
  constructor(private readonly http: HttpClient) {}

  getTranslation(lang: string): Observable<TranslationObject> {
    if (typeof window === 'undefined') {
      return of({});
    }
    return this.http.get<TranslationObject>(`/i18n/${lang}.json`);
  }
}

export function httpLoaderFactory(http: HttpClient) {
  return new AppTranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'pt-br',
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
  ],
};
