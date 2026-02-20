import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';

  readonly mode = signal<ThemeMode>('light');

  constructor() {
    const stored =
      typeof window !== 'undefined' &&
      window.localStorage &&
      typeof window.localStorage.getItem === 'function'
        ? (window.localStorage.getItem(this.storageKey) as ThemeMode | null)
        : null;

    const initial: ThemeMode = stored === 'dark' ? 'dark' : 'light';
    this.setMode(initial);
  }

  toggle() {
    this.setMode(this.mode() === 'dark' ? 'light' : 'dark');
  }

  setMode(next: ThemeMode) {
    this.mode.set(next);

    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', next === 'dark');
    }

    if (
      typeof window !== 'undefined' &&
      window.localStorage &&
      typeof window.localStorage.setItem === 'function'
    ) {
      window.localStorage.setItem(this.storageKey, next);
    }
  }
}
