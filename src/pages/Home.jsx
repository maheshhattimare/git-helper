import { useState } from "react";
import { InputBox } from "../components/InputBox";
import { CommandCard } from "../components/CommandCard";
import { generateGitCommands } from "../utils/gitCommands";

export function Home() {
  const [branchName, setBranchName] = useState("");

  const commands = branchName.trim()
    ? generateGitCommands(branchName.trim())
    : [];

  return (
    <main className="min-h-[calc(100vh-73px)] bg-background">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-3">
            Simplify Your Git Workflow
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Enter your branch name once and get all the commands you need for
            creating, pushing, merging, and deleting branches.
          </p>
        </div>

        <div className="mb-12">
          <InputBox value={branchName} onChange={setBranchName} />
        </div>

        {commands.length > 0 && (
          <div className="space-y-6">
            {commands.map((section, index) => (
              <CommandCard key={index} section={section} />
            ))}
          </div>
        )}

        {!branchName && (
          <div className="text-center py-16">
            <p className="text-muted text-sm">
              Commands will appear here once you enter a branch name
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
