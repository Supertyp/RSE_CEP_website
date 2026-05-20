import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const base = import.meta.env.SITE + import.meta.env.BASE_URL.slice(0, -1);

  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${base}/blog/${post.id}/</link>
      <guid isPermaLink="true">${base}/blog/${post.id}/</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RSE CEP Blog</title>
    <link>${base}</link>
    <description>News and updates from the RSE Capacity Enhancement Project</description>
    <language>en</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
