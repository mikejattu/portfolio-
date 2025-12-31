import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
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
        "group relative block rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:bg-accent/50 hover:shadow-lg",
        className
      )}
    >
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative space-y-3">
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
        <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          Read more
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

