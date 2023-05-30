import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  
  return rss({
    title: 'Documentacion Mundodev',
    description: 'Obten doumentaciones de toda la comunidad de Mundodev o otras',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./content/**/*.md')),
  });
}