declare const _default: {
  branches: "main";
  preset: "conventionalcommits";
  presetConfig: {
    types: [
      { type: "feat"; section: "Features" },
      { type: "fix"; section: "Bug Fixes" },
      { type: "perf"; section: "Performance Improvements" },
      { type: "revert"; section: "Reverts" },
      { type: "build"; section: "Build System" },
      { type: "initial"; section: "Initial" },
      { type: "dependencies"; section: "Dependencies" },
      { type: "peerDependencies"; section: "Peer dependencies" },
      { type: "devDependencies"; section: "Dev dependencies"; hidden: true },
      { type: "metadata"; section: "Metadata"; hidden: true },
      { type: "docs"; section: "Documentation"; hidden: true },
      { type: "style"; section: "Styles"; hidden: true },
      { type: "chore"; section: "Miscellaneous Chores"; hidden: true },
      { type: "refactor"; section: "Code Refactoring"; hidden: true },
      { type: "test"; section: "Tests"; hidden: true },
      { type: "ci"; section: "Continuous Integration"; hidden: true }
    ];
  };
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          { breaking: true; release: "major" },
          { type: "feat"; release: "minor" },
          { type: "fix"; release: "patch" },
          { type: "perf"; release: "patch" },
          { type: "revert"; release: "patch" },
          { type: "build"; release: "patch" },
          { type: "initial"; release: "minor" },
          { type: "dependencies"; release: "patch" },
          { type: "peerDependencies"; release: "patch" }
        ];
      }
    ],
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogTitle: "# Changelog" }],
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      { assets: ["CHANGELOG.md", "package.json", "package-lock.json", "docs"] }
    ]
  ];
};

export = _default;
