"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card className="group flex">
      <div className="flex-none">
        <Avatar className="m-auto size-12 border bg-muted dark:bg-foreground">
          <AvatarImage src={logoUrl} alt={altText} className="object-contain" />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="ml-4 flex min-w-0 flex-grow flex-col">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <button
              type="button"
              disabled={!description}
              aria-expanded={description ? isExpanded : undefined}
              onClick={() => description && setIsExpanded((value) => !value)}
              className="inline-flex min-w-0 items-center gap-1 text-left text-xs font-semibold leading-tight disabled:cursor-default sm:text-sm"
            >
              <span>{title}</span>
              {badges?.map((badge) => (
                <Badge
                  variant="secondary"
                  className="shrink-0 align-middle text-xs"
                  key={badge}
                >
                  {badge}
                </Badge>
              ))}
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 shrink-0 transition-transform duration-300",
                    isExpanded && "rotate-90",
                  )}
                />
              )}
            </button>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
                {period}
              </span>
              {href && (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${title} website`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLinkIcon className="size-3.5" />
                </Link>
              )}
            </div>
          </div>
          {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
        </CardHeader>
        {description && (
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden pr-4 text-xs text-muted-foreground sm:text-sm"
          >
            <p className="pb-4">{description}</p>
          </motion.div>
        )}
      </div>
    </Card>
  );
};
