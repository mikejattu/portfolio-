import { BlogCard } from "@/components/blog-card";
import { HackathonCard } from "@/components/hackathon-card";
import { InteractiveTerminal } from "@/components/interactive-terminal";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { PublicationCard } from "@/components/publication-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const posts = await getBlogPosts();
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          {/* Interactive Terminal */}
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <InteractiveTerminal />
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
        {/* CV Download Button */}
        <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
          <div className="mt-4">
            <Link
              href={DATA.cvUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="size-4" />
              Download CV
            </Link>
          </div>
        </BlurFade>
      </section>
      
      {/* Research Interests Section */}
      <section id="research-interests">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Research Interests</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5.5}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.researchInterests.statement}
            </Markdown>
          </BlurFade>
          <div className="grid gap-3 sm:grid-cols-3 mt-2">
            {DATA.researchInterests.areas.map((area, id) => (
              <BlurFade key={area.title} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
                <div className="rounded-lg border bg-card p-4 transition-shadow hover:shadow-md">
                  <h3 className="font-semibold text-sm mb-2">{area.title}</h3>
                  <p className="text-xs text-muted-foreground">{area.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="research">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6.5}>
            <h2 className="text-xl font-bold">Research Experience</h2>
          </BlurFade>
          {DATA.research.map((research, id) => (
            <BlurFade
              key={research.title}
              delay={BLUR_FADE_DELAY * 7 + id * 0.05}
            >
              <ResumeCard
                logoUrl={research.logoUrl}
                altText={research.institution}
                title={research.institution}
                subtitle={research.title}
                href={research.href}
                badges={research.badges}
                period={`${research.start} - ${research.end ?? "Present"}`}
                description={research.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7.5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="Teaching">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Teaching Experience</h2>
          </BlurFade>
          {DATA.teaching.map((teaching, id) => (
            <BlurFade
              key={teaching.title}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={teaching.title}
                logoUrl={teaching.logoUrl}
                altText={teaching.title}
                title={teaching.title}
                subtitle={teaching.subtitle}
                href={teaching.href}
                badges={teaching.badges}
                period={`${teaching.start} - ${teaching.end ?? "Present"}`}
                description={teaching.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      
      {/* Publications Section */}
      <section id="publications">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Publications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Academic Work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Research papers, preprints, and presentations.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 max-w-[800px] mx-auto">
            {DATA.publications.length > 0 ? (
              DATA.publications.map((pub, id) => (
                <BlurFade key={pub.title} delay={BLUR_FADE_DELAY * 17 + id * 0.05}>
                  <PublicationCard
                    title={pub.title}
                    authors={pub.authors}
                    venue={pub.venue}
                    year={pub.year}
                    type={pub.type}
                    status={pub.status}
                    links={pub.links}
                    abstract={pub.abstract}
                  />
                </BlurFade>
              ))
            ) : (
              <BlurFade delay={BLUR_FADE_DELAY * 17}>
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="size-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Publications coming soon...</p>
                  <p className="text-xs mt-2">Currently working on research projects that will lead to publications.</p>
                </div>
              </BlurFade>
            )}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Blog
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                  Mike&apos;s Blog ✍️
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I write about AI, machine learning, software development, and
                  lessons learned along the way.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {posts
              .sort((a, b) => {
                if (
                  new Date(a.metadata.publishedAt) >
                  new Date(b.metadata.publishedAt)
                ) {
                  return -1;
                }
                return 1;
              })
              .slice(0, 4)
              .map((post, id) => (
                <BlurFade
                  key={post.slug}
                  delay={BLUR_FADE_DELAY * 19 + id * 0.05}
                >
                  <BlogCard
                    title={post.metadata.title}
                    summary={post.metadata.summary}
                    publishedAt={post.metadata.publishedAt}
                    slug={post.slug}
                  />
                </BlurFade>
              ))}
          </div>
          {posts.length > 4 && (
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <div className="flex justify-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  View all posts
                  <span>→</span>
                </Link>
              </div>
            </BlurFade>
          )}
        </div>
      </section>
      
      {/* Reading Section */}
      <section id="reading">
        <div className="space-y-8 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Reading
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I&apos;m Reading 📚
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Books and papers that are shaping my thinking.
                </p>
              </div>
            </div>
          </BlurFade>
          
          <div className="max-w-[800px] mx-auto space-y-8">
            {/* Currently Reading */}
            <BlurFade delay={BLUR_FADE_DELAY * 22}>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-500">●</span> Currently Reading
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {DATA.reading.currentlyReading.map((item, id) => (
                    <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 22 + id * 0.05}>
                      <Link
                        href={item.link || "#"}
                        target={item.link ? "_blank" : undefined}
                        className="group flex gap-3 rounded-lg border p-4 transition-all hover:shadow-md hover:border-primary/20"
                      >
                        <span className="text-2xl">{item.cover}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground truncate">{item.author}</p>
                          <Badge variant="outline" className="mt-2 text-[10px]">
                            {item.type}
                          </Badge>
                        </div>
                      </Link>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Completed */}
            <BlurFade delay={BLUR_FADE_DELAY * 23}>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Recently Completed
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {DATA.reading.completed.map((item, id) => (
                    <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 23 + id * 0.05}>
                      <Link
                        href={item.link || "#"}
                        target={item.link ? "_blank" : undefined}
                        className="group flex gap-3 rounded-lg border p-3 transition-all hover:shadow-md hover:border-primary/20"
                      >
                        <span className="text-xl">{item.cover}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-xs truncate group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[10px] text-muted-foreground truncate">{item.author}</p>
                        </div>
                      </Link>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Want to Read */}
            <BlurFade delay={BLUR_FADE_DELAY * 24}>
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-yellow-500">○</span> Want to Read
                </h3>
                <div className="flex flex-wrap gap-2">
                  {DATA.reading.wantToRead.map((item, id) => (
                    <BlurFade key={item.title} delay={BLUR_FADE_DELAY * 24 + id * 0.05}>
                      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm">
                        <span>{item.cover}</span>
                        <span className="font-medium">{item.title}</span>
                        <span className="text-muted-foreground text-xs">by {item.author}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
