import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const patterns = (await getCollection('patterns'))
    .sort((a, b) => b.data.last_updated.valueOf() - a.data.last_updated.valueOf());

  const base = import.meta.env.SITE + import.meta.env.BASE_URL.slice(0, -1);

  const items = patterns.map((p) => `
    <item>
      <title><![CDATA[${p.data.pattern_id} — ${p.data.title}]]></title>
      <link>${base}/patterns/${p.id}/</link>
      <guid isPermaLink="true">${base}/patterns/${p.id}/</guid>
      <description><![CDATA[${p.data.pattern_type} pattern by ${p.data.author}. Keywords: ${p.data.keywords.join(', ')}.]]></description>
      <pubDate>${p.data.last_updated.toUTCString()}</pubDate>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RSE CEP Patterns</title>
    <link>${base}/patterns/</link>
    <description>RSE patterns for HASS and Indigenous research software engineering</description>
    <language>en</language>
    <atom:link href="${base}/patterns/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
