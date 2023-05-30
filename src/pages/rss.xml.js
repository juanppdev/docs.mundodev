import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function get(context) {
  
  const mysql = await getCollection('mysql').catch(() => []);
  const discord = await getCollection('discord').catch(() => []);
  const mongodb = await getCollection('mongodb').catch(() => []);
  const javascript = await getCollection('javascript').catch(() => []);
  const html = await getCollection('html').catch(() => []);
  const css = await getCollection('css').catch(() => []);
  const python = await getCollection('python').catch(() => []);
  const java = await getCollection('java').catch(() => []);
  
  const allDocs = [
      ...mysql,
      ...discord,
      ...mongodb,
      ...javascript,
      ...html,
      ...css,
      ...python,
      ...java,
      ];
  
  return rss({
    title: 'Documentacion Mundodev',
    description: "Una web de documentaiones de/para la comunidad",
    site: context.site,
    items: allDocs.map((doc) => ({
      link: `/docs/${doc.data.tag}/${doc.slug}`,
      content: sanitizeHtml(parser.render(doc.body)),
      ...doc.data
    })),
  });
}