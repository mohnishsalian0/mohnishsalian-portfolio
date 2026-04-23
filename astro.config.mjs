// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: ['arrow-up-right', 'arrow-left', 'arrow-right', 'clock', 'hard-hat', 'book-open-text'],
        'simple-icons': ['github', 'linkedin', 'behance', 'hsbc'],
      },
    }),
  ],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: [400, 600, 700, 900],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Asap Condensed',
      cssVariable: '--font-sans',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
    },
  ],
});
