// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://britneyscripts.github.io',
    base: '/',
    integrations: [
        sitemap({
            // /blog/ is a noindex meta-refresh stub that redirects to /en/blog;
            // it must not be listed in the sitemap or GSC flags it as a noindex conflict.
            filter: (page) => page !== 'https://britneyscripts.github.io/blog/',
        }),
    ],
});
