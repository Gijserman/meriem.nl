import {fetchData} from "./fetchData";

export async function fetchMetadata(type) {
    const pageData = await fetchData(type);
    const page = pageData?.[0];
    const canonicalUrl = `${process.env.NEXT_BASE_URL}/${type}`;

    return {
        title: page?.title || 'Default Title',
        description: page?.content || 'Default description', // Fallback if content is missing
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: page?.title || 'Default Title',
            type: 'website',
            url: canonicalUrl,
            images: [
                {
                    url: `/video/${type}@2x.mp4.jpg`,
                    width: 630,
                    height: 630,
                    alt: page?.title || 'Default Alt Text',
                },
            ],
        },
    };
}