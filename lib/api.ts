import { getPayload, Sort, Where } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

interface payloadProps{
    where?: Where,
    sort?: Sort,
    limit?: number,
    id?: string
}


export async function fetchExperienceData(props?: payloadProps){
    try {
        const res = await payload.find({
            collection:"experience",
            ...props
        })
        return res.docs
    } catch(e) {
        console.error('Error fetching experience data:', e)
        throw e
    }
}


export async function fetchPostsData(props?: payloadProps){
    try {
        const res = await payload.find({
            collection:"posts",
            ...props
        })
        return res.docs
    } catch(e) {
        console.error('Error fetching experience data:', e)
        throw e
    }
}
