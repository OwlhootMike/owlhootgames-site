import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://owlhootgames.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://owlhootgames.com/games/nightclubs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }
    // We will add your game pages here later once they are built!
  ];
}