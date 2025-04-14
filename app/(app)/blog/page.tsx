import { fetchPostsData,fetchTagsData } from "@/lib/api";
import BlogClient from "./blogClient";

// Set revalidation time to 1 hour (3600 seconds)
export const revalidate = 3600;

export default async function BlogPage() {
  const categoryTags = await fetchTagsData({
    where: {
      type: { equals: "Category" },
    },
  });
 
  const posts = await fetchPostsData({limit:15});

  return (
    <BlogClient posts={posts} categories={categoryTags}/>
  );
}
