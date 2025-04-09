// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import {seoPlugin} from "@payloadcms/plugin-seo"

import { Experiences } from './collections/Experiences'
import { Tags } from "./collections/Tags"
import { Media } from './collections/Media'
import { Posts } from './collections/Post'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Post } from '@/payload-types'

import { getServerSideURL } from './utilities/getUrl'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)


const generateTitle: GenerateTitle<Post > = ({ doc }) => {
  return doc?.title ? `${doc.title} | Syed's Portfolio` : `Syed's Portfolio`
}

const generateURL: GenerateURL<Post> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Media,Tags,Experiences,Posts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({
      generateTitle,
      generateURL,
    }),  
  ],
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
