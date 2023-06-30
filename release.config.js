const { GIT_BRANCH: branch } = process.env;

/*
[
    [
      "semantic-release-gitmoji",
      {
        "releaseRules": {
          "patch": {
            "include": [
              ":bento:",
              ":recycle:"
            ]
          }
        }
      }
    ],
    "@semantic-release/github"
  ]
*/
const smeanticReleaseGitmoji = [
  "semantic-release-gitmoji",
  {
    "releaseRules": {
      "patch": {
        "include": [
          ":bento:",
          ":recycle:"
        ]
      }
    }
  }
];
const commitAnalyzer = '@semantic-release/commit-analyzer';
const releaseNotesGenerator = '@semantic-release/release-notes-generator';
const git = [
  '@semantic-release/git',
  {
    'assets': [
      'CHANGELOG.md',
      'package.json',
    ],
  },
];
const exec = [
  '@semantic-release/exec',
  {
    'publishCmd': 'npm run pack',
  },
];
const npm = '@semantic-release/npm';
const github = [
  '@semantic-release/github',
  {
    "assets": [
      { "path": "./dist/windows/*", "name": "arcctl-windows-${nextRelease.gitTag}.exe", "label": "Windows ${nextRelease.gitTag}" },
      { "path": "./dist/linux/*", "name": "arcctl-linux-${nextRelease.gitTag}", "label": "Linux ${nextRelease.gitTag}" },
      { "path": "./dist/osx-amd64/*", "name": "arcctl-osx-amd64-${nextRelease.gitTag}", "label": "OSX Aam64 ${nextRelease.gitTag}" },
      { "path": "./dist/osx-arm64/*", "name": "arcctl-osx-arm64-${nextRelease.gitTag}", "label": "OSX Arm64 ${nextRelease.gitTag}" },
    ]
  }
];
const changelog = [
  '@semantic-release/changelog',
  {
    'changelogFile': 'CHANGELOG.md',
  },
];
const backmerge = [
  '@saithodev/semantic-release-backmerge',
  {
    'branches': ['rc'],
    // Makes sure that only pushed changes are backmerged
    'clearWorkspace': true,
  },
];

const default_plugins = [
  commitAnalyzer,
  releaseNotesGenerator,
  changelog,
  git,
  github,
];

const main_plugins = [
  commitAnalyzer,
  releaseNotesGenerator,
  changelog,
  git,
  github,
];

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  'branches': [
    {
      'name': 'main',
    }
  ],
  plugins: branch === 'main' ? main_plugins : default_plugins,
};

// eslint-disable-next-line unicorn/prefer-module
console.log(module.exports);
