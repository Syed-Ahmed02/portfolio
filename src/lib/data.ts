import 'server-only';
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'

const payload = await getPayloadHMR({ config })

export async function getPageData(slug:string) {
    const pageData = await payload.find({
        collection: 'pages',
        where:{
            slug: {equals:slug}
        }
    })
    return pageData.docs
}