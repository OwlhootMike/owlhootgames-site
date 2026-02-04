import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://owlhootgames.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // We will add your game pages here later once they are built!
  ];
}