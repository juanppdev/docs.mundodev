import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';

export async function get(context) {
  
  const docImportResult = import.meta.glob('../content/**/*.md', { eager: true });
  const docs = Object.values(docImportResult);
  
  return rss({
    title: 'Documentacion Mundodev',
    description: "Una web de documentaiones de/para la comunidad",
    site: context.site,
    items: docs.map((doc) => ({
      link: `/docs/${doc.data.tag}/${doc.slug}`,
      content: sanitizeHtml(doc.compiledContent()),
      ...doc.data
    })),
  });
}