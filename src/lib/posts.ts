import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
// import html from 'remark-html';

const CONTENT_PATH = path.join(process.cwd(), 'src', 'content');

export interface Post {
  title: string;
  description?: string;
  date?: string;
  contentHtml: string;
  slug: string;
}

export async function getPost(
  slug: string,
  folder: 'posts' | 'projects' = 'posts'
): Promise<Post | null> {
  const filePath = path.join(CONTENT_PATH, folder, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeRaw)
    .use(rehypeStringify)
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


export function getPosts(folder: 'posts' | 'projects' = 'posts') {
  const files = fs.readdirSync(path.join(CONTENT_PATH, folder));

  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '');

      const fileContent = fs.readFileSync(
        path.join(CONTENT_PATH, folder, file),
        'utf8'
      );

      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title ?? null,
        description: data.description ?? null,
        date: data.date
          ? new Date(data.date).toISOString()
          : undefined,
      };
    });
}