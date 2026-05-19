import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const patterns = await getCollection('patterns');
  return patterns.map((p) => ({ params: { slug: p.id } }));
}

export const GET: APIRoute = ({ params }) => {
  const file = path.join(process.cwd(), 'src/content/patterns', `${params.slug}.md`);
  const content = fs.readFileSync(file, 'utf-8');
  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': `attachment; filename="${params.slug}.md"`,
    },
  });
};
