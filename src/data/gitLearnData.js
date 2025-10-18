export const gitLearnData = [
  {
    title: "Getting Started",
    description: "Initialize and configure your Git environment",
    commands: [
      { cmd: "git init", desc: "Initialize a new Git repository" },
      {
        cmd: "git clone <url>",
        desc: "Clone a repository into a new directory",
      },
      {
        cmd: 'git config --global user.name "Your Name"',
        desc: "Set your name for commits",
      },
      {
        cmd: 'git config --global user.email "email@example.com"',
        desc: "Set your email for commits",
      },
      { cmd: "git config --list", desc: "List all configuration settings" },
    ],
  },
  {
    title: "Branching & Merging",
    description: "Create, switch, and merge branches",
    commands: [
      { cmd: "git branch", desc: "List all local branches" },
      { cmd: "git branch <branch-name>", desc: "Create a new branch" },
      {
        cmd: "git checkout <branch-name>",
        desc: "Switch to a different branch",
      },
      {
        cmd: "git checkout -b <branch-name>",
        desc: "Create and switch to a new branch",
      },
      {
        cmd: "git merge <branch-name>",
        desc: "Merge a branch into the current branch",
      },
      {
        cmd: "git rebase <branch-name>",
        desc: "Reapply commits on top of another base",
      },
      { cmd: "git branch -d <branch-name>", desc: "Delete a local branch" },
      { cmd: "git branch -m <old-name> <new-name>", desc: "Rename a branch" },
    ],
  },
  {
    title: "Staging & Committing",
    description: "Track changes and create commits",
    commands: [
      { cmd: "git status", desc: "Show the working tree status" },
      { cmd: "git add <file>", desc: "Add file contents to the staging area" },
      { cmd: "git add .", desc: "Add all changes to the staging area" },
      {
        cmd: 'git commit -m "message"',
        desc: "Record changes to the repository",
      },
      { cmd: "git commit --amend", desc: "Modify the most recent commit" },
      {
        cmd: "git reset <file>",
        desc: "Unstage a file while retaining changes",
      },
      {
        cmd: "git reset --hard",
        desc: "Reset working directory to last commit",
      },
      {
        cmd: "git revert <commit>",
        desc: "Create a new commit that undoes changes",
      },
      {
        cmd: "git rm <file>",
        desc: "Remove files from working tree and index",
      },
    ],
  },
  {
    title: "Collaboration",
    description: "Work with remote repositories",
    commands: [
      { cmd: "git remote -v", desc: "List all remote connections" },
      {
        cmd: "git remote add <name> <url>",
        desc: "Add a new remote repository",
      },
      { cmd: "git fetch", desc: "Download objects and refs from remote" },
      { cmd: "git pull", desc: "Fetch and integrate with another repository" },
      {
        cmd: "git push",
        desc: "Update remote refs along with associated objects",
      },
      {
        cmd: "git push -u origin <branch>",
        desc: "Push branch and set upstream tracking",
      },
      {
        cmd: "git push --force",
        desc: "Force push changes (use with caution)",
      },
      { cmd: "git remote remove <name>", desc: "Remove a remote connection" },
    ],
  },
  {
    title: "Advanced",
    description: "Powerful tools for complex workflows",
    commands: [
      { cmd: "git stash", desc: "Temporarily save uncommitted changes" },
      { cmd: "git stash pop", desc: "Apply and remove the most recent stash" },
      { cmd: "git stash list", desc: "List all stashed changes" },
      {
        cmd: "git cherry-pick <commit>",
        desc: "Apply changes from specific commit",
      },
      {
        cmd: "git bisect start",
        desc: "Start binary search to find buggy commit",
      },
      { cmd: "git reflog", desc: "Show a log of all reference updates" },
      {
        cmd: "git log --oneline --graph",
        desc: "Show commit history as a graph",
      },
      { cmd: "git diff", desc: "Show changes between commits or working tree" },
      { cmd: "git tag <tag-name>", desc: "Create a tag for a specific commit" },
      {
        cmd: "git blame <file>",
        desc: "Show who last modified each line of a file",
      },
    ],
  },
];
