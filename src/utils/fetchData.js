import { buildClient } from '@datocms/cma-client-node';

const client = buildClient({ apiToken: process.env.DATOCMS_READONLY_TOKEN });

export async function fetchData(type) {
    return await client.items.list({
        filter: {
            type: type,
        },
    });
}

export async function fetchGlobalSEO() {
    const response = await client.site.find();
    return response.global_seo;
}