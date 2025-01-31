import { buildClient } from '@datocms/cma-client-node';

const client = buildClient({ apiToken: process.env.DATOCMS_API_TOKEN });

export async function fetchData(type) {
    return await client.items.list({
        filter: {
            type: type,
        },
    });
}