import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

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
    description: 'Obten doumentaciones de toda la comunidad de Mundodev o otras',
    site: context.site,
    items: allDocs.map((doc) => ({
      title: doc.data.title,
      description: doc.data.description,
      author: doc.data.author,
      image: {
        url: doc.data.image.url,
        alt: doc.data.image.alt,
      },
      link: `/docs/${doc.data.tag}/${doc.slug}`,
      pubDate: doc.data.pubDate,
    })),
  });
}