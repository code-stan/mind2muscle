import { MetadataRoute } from 'next';
import { getAllCaseStudySlugs } from '@/data/caseStudiesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.studioparallel.site';

  // Get all case study slugs
  const caseStudySlugs = getAllCaseStudySlugs();

  // Generate case study URLs
  const caseStudyUrls = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/projects/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/the-studio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/case-studies/lvi-media`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/case-studies/casa-de-kairos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/case-studies/rift-ai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/case-studies/stella-daniels`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/case-studies/denim-by-sarv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...caseStudyUrls,
  ];
}
