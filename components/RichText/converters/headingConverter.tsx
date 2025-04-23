import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'

export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({node, nodesToJSX}) => {
    const text = nodesToJSX({ nodes: node.children })
    const id = text.join("").toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    
    // Define heading styles based on tag
    const headingStyles = {
      h1: 'text-4xl font-bold mt-8 mb-4',
      h2: 'text-3xl font-bold mt-7 mb-3',
      h3: 'text-2xl font-semibold mt-6 mb-3',
      h4: 'text-xl font-semibold mt-5 mb-2',
      h5: 'text-lg font-medium mt-4 mb-2',
      h6: 'text-base font-medium mt-3 mb-2'
    }
    
    // Get the appropriate style for this heading
    const style = headingStyles[node.tag as keyof typeof headingStyles] || ''
    
    // Create the heading element with the appropriate tag, style, and ID
    const Tag = node.tag
    return <Tag id={id} className={style}>{text}</Tag>
  }
}