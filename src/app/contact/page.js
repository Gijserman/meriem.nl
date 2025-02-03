import Page from "../_components/Page";
import {fetchMetadata} from "../../utils/fetchMetadata";

const type = 'contact';
export async function generateMetadata() {
    return fetchMetadata(type);
}
export default async function ContactPage() {
    return (
        <Page type={type} />
    )
}