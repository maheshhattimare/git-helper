import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import { CommandGroup } from "../components/CommandGroup";
import { gitLearnData } from "../data/gitLearnData";

export function Learn() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-background">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-foreground" />
            <h1 className="text-3xl font-semibold text-foreground">
              Learn Git Commands
            </h1>
          </div>
          <p className="text-muted text-base max-w-3xl">
            Master Git from basics to advanced workflows. Click on any category
            to expand and explore commands with descriptions.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {gitLearnData.map((category, index) => (
            <CommandGroup key={index} category={category} />
          ))}
        </div>

        <div className="pt-8 border-t border-border flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <a
            href="https://maheshhattimare.vercel.app/"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-150 hover:underline hover:animate-pulse"
          >
            Mahesh
          </a>
        </div>
      </div>
    </main>
  );
}
