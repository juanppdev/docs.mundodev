import { getCollection } from "astro:content";

export async function getStaticPatchs() {
  const mysqlDoc = await getCollection("mysql");
  const discordDoc = await getCollection("discord");
  const mongodbDoc = await getCollection("mongodb");
  const jsDoc = await getCollection("javascript");
  const htmlDoc = await getCollection("html");
  const cssDoc = await getCollection("css");
  const pythonDoc = await getCollection("python");
  const javaDoc = await getCollection("java");
  
  const allDocs = [
    ...mysqlDoc,
    ...discordDoc,
    ...mongodbDoc,
    ...jsDoc,
    ...htmlDoc,
    ...cssDoc,
    ...pythonDoc,
    ...javaDoc,
    ];

  const uniqueTags = [...new set(allDocs.map((doc) => doc.data.tags).flat())]

  return uniqueTags.map((doc) => ({
    params: {tag},
  }));
}