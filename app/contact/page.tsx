import { hero } from 'contentlayer/generated'

export default function ContactPage() {
  return (
    <main className="flex w-full max-w-3xl flex-col gap-24 py-32 px-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
          Contact
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Feel free to reach out — I am always open to new opportunities.
        </p>
        <a href={`mailto:${hero.email}`}
          className="w-fit rounded-full bg-zinc-950 dark:bg-zinc-50 px-6 py-3 text-sm font-medium text-white dark:text-black transition-colors hover:bg-zinc-700">
          Say Hello 👋
        </a>
        <div className="flex gap-4 text-sm font-medium">
          {hero.github && (
            <a href={hero.github} target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 underline underline-offset-4">
              GitHub
            </a>
          )}
          {hero.linkedin && (
            <a href={hero.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 underline underline-offset-4">
              LinkedIn
            </a>
          )}
        </div>
      </section>
    </main>
  )
}