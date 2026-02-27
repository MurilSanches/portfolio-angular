import { Component, input } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  template: `
    <footer class="border-t border-black/5 py-10 text-center text-sm opacity-70 dark:border-white/10">
      <div class="mx-auto max-w-6xl px-4">
        <p>© {{ year() }} Murilo Sanches</p>
        <p class="mt-2 text-xs opacity-25">☣ Themed after Resident Evil</p>
      </div>
    </footer>
  `,
})
export class SiteFooterComponent {
  readonly year = input.required<number>();
}
