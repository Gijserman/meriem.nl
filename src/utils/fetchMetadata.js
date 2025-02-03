import {fetchData} from "./fetchData";

export async function fetchMetadata(type) {
    const page = await fetchData(type);
    const canonicalUrl = `${process.env.NEXT_BASE_URL}/${type}`;

    return {
        title: page.title,
        description: page.content,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: page.title,
            type: 'website',
            url: canonicalUrl,
            images: [
                {
                    url: `/video/${type}@2x.mp4.jpg`,
                    width: 630,
                    height: 630,
                    alt: page.title,
                },
            ],
        },
    };
}