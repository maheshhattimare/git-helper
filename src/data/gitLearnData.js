export const gitLearnData = [
  {
    title: "Getting Started",
    description: "Set up and configure your Git environment",
    commands: [
      {
        cmd: "git init",
        desc: "Initialize a new Git repository in the current folder",
      },
      {
        cmd: "git clone <url>",
        desc: "Clone a repository into a new directory",
      },
      {
        cmd: 'git config --global user.name "Your Name"',
        desc: "Set your commit username globally",
      },
      {
        cmd: 'git config --global user.email "email@example.com"',
        desc: "Set your commit email globally",
      },
      {
        cmd: "git config --list",
        desc: "List all current Git configuration settings",
      },
    ],
  },
  {
    title: "Branching & Merging",
    description: "Create, switch, and manage branches effectively",
    commands: [
      { cmd: "git branch", desc: "List all local branches" },
      { cmd: "git branch <branch-name>", desc: "Create a new branch" },
      {
        cmd: "git checkout <branch-name>",
        desc: "Switch to an existing branch",
      },
      {
        cmd: "git checkout -b <branch-name>",
        desc: "Create and switch to a new branch",
      },
      {
        cmd: "git merge <branch-name>",
        desc: "Merge another branch into the current branch",
      },
      {
        cmd: "git rebase <branch-name>",
        desc: "Reapply commits on top of another branch",
      },
      {
        cmd: "git branch -d <branch-name>",
        desc: "Delete a local branch safely",
      },
      { cmd: "git branch -m <old-name> <new-name>", desc: "Rename a branch" },
      { cmd: "git branch -r", desc: "List remote branches" },
    ],
  },
  {
    title: "Staging & Committing",
    description: "Track changes, stage files, and create commits",
    commands: [
      { cmd: "git status", desc: "Check the status of your working directory" },
      { cmd: "git add <file>", desc: "Stage specific file for commit" },
      { cmd: "git add .", desc: "Stage all changes for commit" },
      {
        cmd: 'git commit -m "message"',
        desc: "Create a commit with a message",
      },
      { cmd: "git commit --amend", desc: "Amend the most recent commit" },
      { cmd: "git reset <file>", desc: "Unstage a file while keeping changes" },
      {
        cmd: "git reset --hard",
        desc: "Reset working directory to last commit (destructive)",
      },
      {
        cmd: "git revert <commit>",
        desc: "Undo a commit safely by creating a new commit",
      },
      {
        cmd: "git rm <file>",
        desc: "Remove a file from working directory and index",
      },
    ],
  },
  {
    title: "Collaboration",
    description: "Work with remote repositories and teammates",
    commands: [
      { cmd: "git remote -v", desc: "Show all remote connections" },
      {
        cmd: "git remote add <name> <url>",
        desc: "Add a new remote repository",
      },
      {
        cmd: "git fetch",
        desc: "Download objects and refs from remote without merging",
      },
      { cmd: "git pull", desc: "Fetch and merge changes from remote" },
      { cmd: "git push", desc: "Push commits to the remote repository" },
      {
        cmd: "git push -u origin <branch>",
        desc: "Push branch and set upstream",
      },
      {
        cmd: "git push --force",
        desc: "Force push changes (use with caution)",
      },
      { cmd: "git remote remove <name>", desc: "Remove a remote repository" },
      {
        cmd: "git pull --rebase",
        desc: "Pull changes and rebase your commits on top",
      },
    ],
  },
  {
    title: "Advanced",
    description: "Powerful commands for complex workflows and debugging",
    commands: [
      { cmd: "git stash", desc: "Temporarily save uncommitted changes" },
      { cmd: "git stash pop", desc: "Apply and remove the most recent stash" },
      { cmd: "git stash list", desc: "List all saved stashes" },
      {
        cmd: "git cherry-pick <commit>",
        desc: "Apply changes from a specific commit",
      },
      {
        cmd: "git bisect start",
        desc: "Use binary search to find a buggy commit",
      },
      { cmd: "git reflog", desc: "Show history of all reference changes" },
      {
        cmd: "git log --oneline --graph --all",
        desc: "Visualize commit history in a compact graph",
      },
      {
        cmd: "git diff",
        desc: "Show changes between commits, branches, or working tree",
      },
      { cmd: "git tag <tag-name>", desc: "Create a tag for a specific commit" },
      {
        cmd: "git blame <file>",
        desc: "See who last modified each line of a file",
      },
      {
        cmd: "git reset --soft HEAD~1",
        desc: "Undo last commit but keep changes staged",
      },
      {
        cmd: "git reset --hard HEAD~1",
        desc: "Undo last commit and discard changes",
      },
    ],
  },
];
