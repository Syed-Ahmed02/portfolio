import { blogPosts } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fetchPostsData,fetchTagsData } from "@/lib/api";
import BlogClient from "./blogClient";

export default async function BlogPage() {
  const categoryTags = await fetchTagsData({
    where: {
      type: { equals: "Category" },
    },
  });
  console.log(categoryTags)
  const categoryIds = categoryTags.map(category =>category.id)
  const categoryTitles = categoryTags.map(category => category.title)

  const posts = await fetchPostsData({limit:15});




  return (
    <BlogClient posts={posts} categories={categoryTags}/>
  );
}
