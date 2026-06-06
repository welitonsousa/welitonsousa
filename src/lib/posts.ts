import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';
import { remark } from 'remark';

const CONTENT_PATH = path.join(process.cwd(), 'src', 'content');

export interface Post {
  title: string;
  description?: string;
  date?: string;
  contentHtml: string;
  slug: string;
}

export async function getPost(
  slug: string
): Promise<Post | null> {
  const filePath = path.join(CONTENT_PATH, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    slug,
    title: data.title ?? null,
    description: data.description ?? null,
    date: data.date
      ? new Date(data.date).toISOString()
      : undefined,
    contentHtml: processedContent.toString(),
  };
}
