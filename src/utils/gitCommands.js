export function generateGitCommands(branchName) {
  return [
    {
      title: "Create Branch",
      description: "Create and switch to a new branch",
      commands: [`git checkout -b ${branchName}`],
    },
    {
      title: "Push Branch",
      description: "Push your branch to the remote repository",
      commands: [`git push -u origin ${branchName}`],
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
      description: "Delete the branch locally and remotely",
      commands: [
        `git branch -d ${branchName}`,
        `git push origin --delete ${branchName}`,
      ],
    },
  ];
}
