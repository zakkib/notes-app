import Link from "next/link"
import { StickyNote, PenTool, Share2, Search, ArrowRight } from "lucide-react"
// import styles from './styles/globals.css';

export default function Page() {
  return (
    <div className="flex w-full min-h-screen bg-background flex-col justify-center items-center">
      <header className="top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" >
        <div className="flex h-14 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 ml-4">
            <StickyNote className="h-6 w-6 text-primary" />
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
      <main className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center gap-12 pb-8 pt-24 md:pb-12 md:pt-32 lg:py-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your thoughts,
            <br className="hidden sm:inline" /> organized beautifully
          </h1>
          <p className="max-w-[600px] text-muted-foreground sm:text-xl">
            A simple and elegant note-taking platform. Capture ideas, organize thoughts, and access them from anywhere.
          </p>
          <div className="flex gap-4 mt-6">
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
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          <FeatureCard
            icon={<PenTool className="h-10 w-10 text-primary" />}
            title="Easy Note-Taking"
            description="Quickly jot down your ideas with our intuitive interface."
          />
          <FeatureCard
            icon={<Share2 className="h-10 w-10 text-primary" />}
            title="Seamless Sharing"
            description="Collaborate with others by sharing your notes effortlessly."
          />
          <FeatureCard
            icon={<Search className="h-10 w-10 text-primary" />}
            title="Powerful Search"
            description="Find your notes instantly with our advanced search capabilities."
          />
        </div>

        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <Step number={1} title="Sign Up" description="Create your free account in seconds" />
            <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />
            <Step number={2} title="Create Notes" description="Start writing and organizing your thoughts" />
            <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground" />
            <Step number={3} title="Access Anywhere" description="Sync across all your devices seamlessly" />
          </div>
        </div>
      </main>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

