import BlurFade from "@/components/magicui/blur-fade";
import { BlogCard } from "@/components/blog-card";
import { getBlogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Notes on computer vision, machine learning, software, and lessons from building.
          </p>
        </div>
      </BlurFade>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <BlogCard
                title={post.metadata.title}
                summary={post.metadata.summary}
                publishedAt={post.metadata.publishedAt}
                slug={post.slug}
                className="h-full"
              />
            </BlurFade>
          ))}
      </div>
    </main>
  );
}
