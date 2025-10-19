export function generateGitCommands(branchName) {
  return [
    {
      title: "Create Branch",
      description: "Create a new branch and switch to it",
      commands: [
        `git checkout -b ${branchName}`, // create & switch
        `git branch`, // list all branches
      ],
    },
    {
      title: "Push Branch",
      description: "Push your branch to the remote repository",
      commands: [
        `git push -u origin ${branchName}`, // first push with upstream
        `git push`, // subsequent pushes
      ],
    },
    {
      title: "Update Branch",
      description: "Keep your branch up-to-date with main",
      commands: [
        "git fetch origin", // fetch latest changes
        "git checkout main",
        "git pull origin main", // update local main
        `git checkout ${branchName}`,
        `git merge main`, // merge latest main into feature branch
      ],
    },
    {
      title: "Merge with Main",
      description: "Merge your branch into main and push changes",
      commands: [
        "git checkout main",
        "git pull origin main",
        `git merge ${branchName}`,
        "git push origin main",
      ],
    },
    {
      title: "Delete Branch",
      description: "Remove the branch locally and remotely after merge",
      commands: [
        `git branch -d ${branchName}`, // delete local
        `git push origin --delete ${branchName}`, // delete remote
      ],
    },
    {
      title: "Undo / Fix Mistakes",
      description: "Common fixes if you mess up commits",
      commands: [
        "git reset --soft HEAD~1  # undo last commit but keep changes",
        "git reset --hard HEAD~1  # undo last commit and discard changes",
        "git revert <commit>      # undo commit safely",
      ],
    },
    {
      title: "Stash Changes",
      description: "Temporarily save your changes without committing",
      commands: [
        "git stash        # stash uncommitted changes",
        "git stash list   # view stashes",
        "git stash apply  # apply latest stash",
        "git stash pop    # apply and remove latest stash",
      ],
    },
    {
      title: "View History & Status",
      description: "Quickly check what’s going on in your repo",
      commands: [
        "git status      # see changes in working directory",
        "git log --oneline --graph --all  # compact commit history",
        "git diff        # see unstaged changes",
      ],
    },
  ];
}
