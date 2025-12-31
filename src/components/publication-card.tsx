import { Badge } from "@/components/ui/badge";
import { FileText, Github, Presentation } from "lucide-react";
import Link from "next/link";

interface PublicationCardProps {
  title: string;
  authors: readonly string[];
  venue: string;
  year: string;
  type: "conference" | "journal" | "preprint" | "thesis" | "poster";
  status: "published" | "accepted" | "under-review" | "in-preparation";
  links?: {
    paper?: string;
    code?: string;
    slides?: string;
  };
  abstract?: string;
}

const typeLabels: Record<string, string> = {
  conference: "Conference",
  journal: "Journal",
  preprint: "Preprint",
  thesis: "Thesis",
  poster: "Poster",
};

const statusColors: Record<string, string> = {
  published: "bg-green-500/10 text-green-600 dark:text-green-400",
  accepted: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "under-review": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  "in-preparation": "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

const statusLabels: Record<string, string> = {
  published: "Published",
  accepted: "Accepted",
  "under-review": "Under Review",
  "in-preparation": "In Preparation",
};

export function PublicationCard({
  title,
  authors,
  venue,
  year,
  type,
  status,
  links,
  abstract,
}: PublicationCardProps) {
  return (
    <div className="group rounded-lg border p-4 transition-all hover:shadow-md hover:border-primary/20">
      {/* Type and Status badges */}
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="outline" className="text-[10px]">
          {typeLabels[type]}
        </Badge>
        <Badge className={`text-[10px] ${statusColors[status]}`}>
          {statusLabels[status]}
        </Badge>
        <span className="text-xs text-muted-foreground ml-auto">{year}</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Authors */}
      <p className="text-xs text-muted-foreground mb-1">
        {authors.map((author, idx) => (
          <span key={idx}>
            {author === "Mike Jattu" ? (
              <span className="font-semibold text-foreground">{author}</span>
            ) : (
              author
            )}
            {idx < authors.length - 1 && ", "}
          </span>
        ))}
      </p>

      {/* Venue */}
      <p className="text-xs italic text-muted-foreground mb-3">{venue}</p>

      {/* Abstract (if provided) */}
      {abstract && (
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {abstract}
        </p>
      )}

      {/* Links */}
      {links && (links.paper || links.code || links.slides) && (
        <div className="flex gap-3">
          {links.paper && (
            <Link
              href={links.paper}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <FileText className="size-3" />
              Paper
            </Link>
          )}
          {links.code && (
            <Link
              href={links.code}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <Github className="size-3" />
              Code
            </Link>
          )}
          {links.slides && (
            <Link
              href={links.slides}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
            >
              <Presentation className="size-3" />
              Slides
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

