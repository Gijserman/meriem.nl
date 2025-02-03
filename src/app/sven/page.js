import Page from "../_components/Page";
import {fetchMetadata} from "../../utils/fetchMetadata";

const type = 'sven';
export async function generateMetadata() {
    return fetchMetadata(type);
}
export default function Sven() {
    return (
        <Page type={type} />
    );
}