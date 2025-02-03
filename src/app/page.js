import Page from "./_components/Page";
import {fetchMetadata} from "../utils/fetchMetadata";
import Script from "next/script";

const type = 'begeleiding';
export async function generateMetadata() {
    return fetchMetadata(type);
}
export default function Home() {
    return (
        <>
            <Page type="begeleiding" />
            <Script type="application/ld+json" id="structured-data">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Meriem",
                    "url": "http://meriem.nl",
                    "description": "Your site description here",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Meriem",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "http://meriem.nl/logo@2x.png"
                        }
                    }
                })}
            </Script>
        </>
    );
}
