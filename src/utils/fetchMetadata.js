import {fetchData, fetchGlobalSEO} from "./fetchData";

export async function fetchMetadata(type) {
    const globalSEO = await fetchGlobalSEO();
    const pageData = await fetchData(type);
    const page = pageData?.[0];
    const canonicalUrl = `${process.env.NEXT_BASE_URL}/${type}`;

    return {
        title: page?.title || globalSEO.fallback_seo.title || 'Default Title',
        description: globalSEO.fallback_seo.description || page?.content || 'Default description',
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: page?.title || globalSEO.fallback_seo.title || 'Default Title',
            type: 'website',
            url: canonicalUrl,
            images: [
                {
                    url: `/video/${type}@2x.mp4.jpg`,
                    width: 630,
                    height: 630,
                    alt: page?.title || globalSEO.fallback_seo.title || 'Default Alt Text',
                },
            ],
        },
    };
}