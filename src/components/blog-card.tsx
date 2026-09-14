import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  className?: string;
}

export function BlogCard({
  title,
  summary,
  publishedAt,
  slug,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-foreground/20 hover:bg-accent/50",
        className
      )}
    >
      <div className="space-y-3">
        {/* Date */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="size-3" />
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>

        {/* Title */}
        <h3 className="font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>

        {/* Summary */}
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {summary}
        </p>

        {/* Read more indicator */}
        <div className="flex items-center gap-1 text-xs font-medium text-primary">
          Read more
          <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
