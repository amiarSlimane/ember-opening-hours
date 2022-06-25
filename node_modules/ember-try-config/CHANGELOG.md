## v4.0.0 (2020-10-29)

#### :boom: Breaking Change
* [#103](https://github.com/ember-cli/ember-try-config/pull/103) Drop Bower scenario support. ([@rwjblue](https://github.com/rwjblue))
* [#98](https://github.com/ember-cli/ember-try-config/pull/98) Drop Node 6, 8, 11, 13 support, ([@rwjblue](https://github.com/rwjblue))

#### :rocket: Enhancement
* [#102](https://github.com/ember-cli/ember-try-config/pull/102) Migrate from RSVP to native Promises & async / await. ([@rwjblue](https://github.com/rwjblue))
* [#100](https://github.com/ember-cli/ember-try-config/pull/100) Update dependencies / devDependencies to latest. ([@rwjblue](https://github.com/rwjblue))

#### :house: Internal
* [#101](https://github.com/ember-cli/ember-try-config/pull/101) Add release automation setup. ([@rwjblue](https://github.com/rwjblue))
* [#99](https://github.com/ember-cli/ember-try-config/pull/99) Migrate to stand alone eslint. ([@rwjblue](https://github.com/rwjblue))
* [#97](https://github.com/ember-cli/ember-try-config/pull/97) Migrate to GitHub Actions. ([@rwjblue](https://github.com/rwjblue))
* [#24](https://github.com/ember-cli/ember-try-config/pull/24) TravisCI: Remove deprecated `sudo: false` option ([@Turbo87](https://github.com/Turbo87))

#### Committers: 4
- Katie Gengler ([@kategengler](https://github.com/kategengler))
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)


# Change Log

## [v3.0.0](https://github.com/ember-cli/ember-try-config/tree/v3.0.0)

[Full Changelog](https://github.com/ember-cli/ember-try-config/compare/v2.2.0...v3.0.0)

- BREAKING CHANGE: The consuming project must be using ember via the ember-source npm package. This will continue to test older versions of Ember from bower, but the starting point must be npm-based. 

**Merged pull requests:**

- Use ember-source for versions it is available. Support testing channels via ember-source package. [\#21](https://github.com/ember-cli/ember-try-config/pull/21) ([kategengler](https://github.com/kategengler))
- Update outdated packages [\#20](https://github.com/ember-cli/ember-try-config/pull/20) ([kategengler](https://github.com/kategengler))
- Replace Mocha, Chai and Istanbul with Jest [\#18](https://github.com/ember-cli/ember-try-config/pull/18) ([Turbo87](https://github.com/Turbo87))

## [v2.2.0](https://github.com/ember-cli/ember-try-config/tree/v2.2.0) (2017-11-07)
[Full Changelog](https://github.com/ember-cli/ember-try-config/compare/v2.1.0...v2.2.0)

**Implemented enhancements:**

- Use `remote-git-tags` instead of GitHub API [\#12](https://github.com/ember-cli/ember-try-config/pull/12) ([Turbo87](https://github.com/Turbo87))
- Update "known-ember-versions.json" file [\#11](https://github.com/ember-cli/ember-try-config/pull/11) ([Turbo87](https://github.com/Turbo87))
-  Cache HTTP responses to avoid GitHub API rate limiting [\#9](https://github.com/ember-cli/ember-try-config/pull/9) ([Turbo87](https://github.com/Turbo87))
- Sort generated configs according to semver rules [\#7](https://github.com/ember-cli/ember-try-config/pull/7) ([Turbo87](https://github.com/Turbo87))

**Fixed bugs:**

- Scenario generator "broken" if `ember-source` is used [\#14](https://github.com/ember-cli/ember-try-config/issues/14)
- v2.x Backports [\#19](https://github.com/ember-cli/ember-try-config/pull/19) ([Turbo87](https://github.com/Turbo87))
- Set `ember-source` dependency to `null` for bower scenarios [\#15](https://github.com/ember-cli/ember-try-config/pull/15) ([Turbo87](https://github.com/Turbo87))

**Merged pull requests:**

- Use `yarn` instead of `npm` [\#17](https://github.com/ember-cli/ember-try-config/pull/17) ([Turbo87](https://github.com/Turbo87))
- Replace JSCS with ESLint [\#16](https://github.com/ember-cli/ember-try-config/pull/16) ([Turbo87](https://github.com/Turbo87))
- Increase test timeouts for tests hitting the network [\#8](https://github.com/ember-cli/ember-try-config/pull/8) ([Turbo87](https://github.com/Turbo87))
- Update known ember versions [\#6](https://github.com/ember-cli/ember-try-config/pull/6) ([kategengler](https://github.com/kategengler))

## [v2.1.0](https://github.com/ember-cli/ember-try-config/tree/v2.1.0) (2016-09-09)
[Full Changelog](https://github.com/ember-cli/ember-try-config/compare/v2.0.1...v2.1.0)

**Merged pull requests:**

- Make updating list of Ember versions easier. [\#4](https://github.com/ember-cli/ember-try-config/pull/4) ([rwjblue](https://github.com/rwjblue))
- Update possible ember versions that are hardcoded [\#2](https://github.com/ember-cli/ember-try-config/pull/2) ([kategengler](https://github.com/kategengler))
- Update .npmignore [\#1](https://github.com/ember-cli/ember-try-config/pull/1) ([bmeurant](https://github.com/bmeurant))

## [v2.0.1](https://github.com/ember-cli/ember-try-config/tree/v2.0.1) (2016-03-13)
[Full Changelog](https://github.com/ember-cli/ember-try-config/compare/v2.0.0...v2.0.1)

## [v2.0.0](https://github.com/ember-cli/ember-try-config/tree/v2.0.0) (2016-03-12)
[Full Changelog](https://github.com/ember-cli/ember-try-config/compare/v1.0.2...v2.0.0)

## [v1.0.2](https://github.com/ember-cli/ember-try-config/tree/v1.0.2) (2016-03-11)
[Full Changelog](https://github.com/ember-cli/ember-try-config/compare/v1.0.1...v1.0.2)

## [v1.0.1](https://github.com/ember-cli/ember-try-config/tree/v1.0.1) (2016-03-11)


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
