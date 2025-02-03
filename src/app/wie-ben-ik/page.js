import Page from "../_components/Page";
import {fetchMetadata} from "../../utils/fetchMetadata";

const type = 'wie_ben_ik';
export async function generateMetadata() {
    return fetchMetadata(type);
}

export default function WieBenIk() {
    return (
        <Page type={type} />
    );
}