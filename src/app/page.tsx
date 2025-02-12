import Link from "next/link"
import { StickyNote } from "lucide-react"

export default function Page() {
  return (
    <div className="flex w-full min-h-screen bg-background items-center justify-center">
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full flex h-14 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 ml-4">
            <StickyNote className="h-6 w-6 text-primary"/>
            <span className="text-xl font-bold">Sticky</span>
          </Link>
          <nav className="ml-auto flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/notes" className="text-sm font-medium transition-colors hover:text-primary">
              Notes
            </Link>
            <Link href="/account" className="text-sm font-medium transition-colors hover:text-primary">
              Account
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-6 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your thoughts,
            <br className="hidden sm:inline" /> organized beautifully
          </h1>
          <p className="max-w-[600px] text-muted-foreground sm:text-xl">
            A simple and elegant note-taking platform. Capture ideas, organize thoughts, and access them from anywhere.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/notes"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  )
}
