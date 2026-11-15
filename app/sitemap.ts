import { MetadataRoute } from 'next';

const BASE_URL = 'https://owlhootgames.com';

// Public pages only. The KTS test page and the Archives page are intentionally left out.
const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/games/nightclubsPRSM', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/games/nova-galactica', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/games/detective-jane', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
