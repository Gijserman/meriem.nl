import Page from "../_components/Page";
import {fetchMetadata} from "../../utils/fetchMetadata";

const type = 'rean';
export async function generateMetadata() {
    return fetchMetadata(type);
}

export default function Rean() {
    return (
        <Page type={type} />
    );
}