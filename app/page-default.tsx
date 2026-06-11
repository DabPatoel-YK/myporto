import { hero } from 'contentlayer/generated'

export default function Home() {
  return (
    <main className="flex w-full max-w-3xl flex-col gap-24 py-32 px-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
          {hero.name}
        </h1>
        <h2 className="text-xl text-zinc-600 dark:text-zinc-400">
          {hero.title}
        </h2>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {hero.bio}
        </p>
      </section>
    </main>
  )
}