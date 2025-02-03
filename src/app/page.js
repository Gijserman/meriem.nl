import Page from "./_components/Page";
import {fetchMetadata} from "../utils/fetchMetadata";

const type = 'begeleiding';
export async function generateMetadata() {
    return fetchMetadata(type);
}
export default function Home() {
    return (
        <Page type="begeleiding" />
    );
}
